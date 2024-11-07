import CardDetailMovie from "@/app/_components/Card/CardDetailMovie";
import RecommendationMovieList from "./_components/RecommendationMovieList";
import CommentList from "./_components/CommentList";
import moment from "moment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }) => {
  const { id } = params;
  const detailMovie = await getDetailMovie(id);

  let title = `${detailMovie.title} (${moment(detailMovie.release_date).format(
    "YYYY"
  )}) - New Movie`;
  let description = `${detailMovie.overview}`;

  if (detailMovie.hasOwnProperty("success") && !detailMovie.success) {
    title = "Not found - New Movie";
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: `${process.env.TMDB_BASE_URL_IMAGE}/${detailMovie.poster_path}`,
    },
  };
};

const getDetailMovie = async (id) => {
  try {
    const response = await fetch(
      `${process.env.TMDB_API_SERVER}/movie/${id}?language=en-US&append_to_response=videos`,
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

const geCommentList = async (id) => {
  try {
    const response = await fetch(
      `${process.env.TMDB_API_SERVER}/movie/${id}/reviews?language=en-US&page=1`,
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
      `${process.env.TMDB_API_SERVER}/movie/${id}/recommendations?language=en-US&page=1`,
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

export default async function DetailMoviePage({ params }) {
  const { id } = params;
  const detailMovie = await getDetailMovie(id);

  if (detailMovie.hasOwnProperty("success") && !detailMovie.success) {
    return notFound();
  }

  const { results: recommendationMovieList } = await getRecommendationMovieList(
    id
  );
  const { results: commentList } = await geCommentList(id);

  return (
    <div className="flex flex-col gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20">
      <CardDetailMovie movie={detailMovie} />
      <CommentList commentList={commentList} />
      {recommendationMovieList?.length > 0 && (
        <RecommendationMovieList movieList={recommendationMovieList} />
      )}
      <ToastContainer
        limit={2}
        closeOnClick
        autoClose={2000}
        position="bottom-right"
      />
    </div>
  );
}
