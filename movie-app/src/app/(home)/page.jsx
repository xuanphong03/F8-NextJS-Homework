import DiscoverMovieList from "./DiscoverMovieList";
import "./Home.css";

const getDiscoverMovieList = async () => {
  try {
    const response = await fetch(
      `${process.env.TMDB_API_SERVER}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
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

export default async function HomePage() {
  const discoverMovieResponse = await getDiscoverMovieList();
  const { results: discoverMovieList } = discoverMovieResponse;

  return (
    <div>
      <DiscoverMovieList movieList={discoverMovieList} />
    </div>
  );
}
