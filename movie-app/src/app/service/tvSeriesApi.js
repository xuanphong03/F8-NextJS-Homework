import axiosClient from "./axiosClient";

const tvSeriesApi = {
  getPopular(params) {
    const url = "/tv/popular";
    return axiosClient.get(url, { params });
  },
  getAiringToday(params) {
    const url = "/tv/airing_today";
    return axiosClient.get(url, { params });
  },
  getOnTheAir(params) {
    const url = "/tv/on_the_air";
    return axiosClient.get(url, { params });
  },
  getTopRated(params) {
    const url = "/tv/top_rated";
    return axiosClient.get(url, { params });
  },
  getDetail(id, params) {
    const url = `/tv/${id}`;
    return axiosClient.get(url, { params });
  },
};

export default tvSeriesApi;
