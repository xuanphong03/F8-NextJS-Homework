import moment from "moment";
import { notFound } from "next/navigation";
import RecommendationTvList from "./_components/Recommendation/RecommendationMovieList";
import DetailTvCard from "./_components/TvInfoCard/DetailTvCard";
import ReviewList from "./_components/Reviews/ReviewList";

export const generateMetadata = async ({ params }) => {
  const { id } = params;
  const detailTv = await getDetailTv(id);

  let title = `${detailTv.name} (${moment(detailTv.release_date).format(
    "YYYY"
  )}) - New Movie`;
  let description = `${detailTv.overview}`;

  if (detailTv.hasOwnProperty("success") && !detailTv.success) {
    title = "Not found - New Movie";
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: `${process.env.TMDB_BASE_URL_IMAGE}/${detailTv.poster_path}`,
    },
  };
};

const getDetailTv = async (id) => {
  try {
    const response = await fetch(
      `${process.env.TMDB_API_SERVER}/tv/${id}?language=en-US&append_to_response=videos`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
        },
      }
    );
    return response.json();
  } catch (error) {}
};

const getReviewList = async (id) => {
  try {
    const response = await fetch(
      `${process.env.TMDB_API_SERVER}/tv/${id}/reviews?language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
        },
      }
    );
    return response.json();
  } catch (error) {}
};

const getRecommendationMovieList = async (id) => {
  try {
    const response = await fetch(
      `${process.env.TMDB_API_SERVER}/tv/${id}/recommendations?language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
        },
      }
    );
    return response.json();
  } catch (error) {}
};

export default async function DetailTvPage({ params }) {
  const { id } = params;
  const detailTv = await getDetailTv(id);

  if (detailTv.hasOwnProperty("success") && !detailTv.success) {
    return notFound();
  }

  const { results: recommendationTvList } = await getRecommendationMovieList(
    id
  );
  const { results: reviewList } = await getReviewList(id);

  return (
    <div className="flex flex-col gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20">
      <DetailTvCard detail_tv={detailTv} />
      <ReviewList reviewList={reviewList} />
      {recommendationTvList?.length > 0 && (
        <RecommendationTvList tvList={recommendationTvList} />
      )}
    </div>
  );
}
