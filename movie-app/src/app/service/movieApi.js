import axiosClient from "./axiosClient";

const movieApi = {
  getNewestMovies(params) {
    const url = "/movie/now_playing";
    return axiosClient.get(url, { params });
  },
  getPopularMovies(params) {
    const url = "/movie/popular";
    return axiosClient.get(url, { params });
  },
  getUpcomingMovies(params) {
    const url = "/movie/upcoming";
    return axiosClient.get(url, { params });
  },
  getNowPlayingMovies(params) {
    const url = "/movie/now_playing";
    return axiosClient.get(url, { params });
  },
  getTopRatedMovies(params) {
    const url = "/movie/top_rated";
    return axiosClient.get(url, { params });
  },
  getSuggestKeyword(params) {
    const url = "/search/keyword";
    return axiosClient.get(url, { params });
  },
  getSearchMoviesByKeyword(params) {
    const url = "/search/collection";
    return axiosClient.get(url, { params });
  },
  getTVSeries(params) {
    const url = "/movie/popular";
    return axiosClient.get(url, { params });
  },
  getDetailMovie(id, params) {
    const url = `/movie/${id}`;
    return axiosClient.get(url, { params });
  },
};

export default movieApi;
