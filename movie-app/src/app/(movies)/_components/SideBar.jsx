import WeekTrendingMovie from "./WeekTrendingMovie";
import WeekTrendingTV from "./WeekTrendingTV";

const getTrendingMovies = async (time_window) => {
  try {
    const response = await fetch(
      `${process.env.TMDB_API_SERVER}/trending/movie/${time_window}?language=en-US`,
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

const getTrendingTV = async (time_window) => {
  try {
    const response = await fetch(
      `${process.env.TMDB_API_SERVER}/trending/tv/${time_window}?language=en-US`,
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

export default async function SideBar() {
  const { results: trendingMovieList } = await getTrendingMovies("week");
  const { results: trendingTVList } = await getTrendingTV("week");

  return (
    <aside className="flex flex-col gap-10">
      <WeekTrendingMovie movieList={trendingMovieList} />
      <WeekTrendingTV tvList={trendingTVList} />
    </aside>
  );
}
