import axiosClient from "./axiosClient";

const discoverApi = {
  getAll(params) {
    const _params = {
      include_adult: false,
      language: "en-US",
      page: 1,
      sort_by: "popularity.desc",
      ...params,
    };
    const endpoint = "/discover/movie";
    return axiosClient.get(endpoint, { params: _params });
  },
};

export default discoverApi;
