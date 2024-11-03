import axiosClient from "./axiosClient";

const mindmapApi = {
  getAll(params) {
    const url = "/mindmaps";
    return axiosClient.get(url, { params });
  },
  getDetail(id) {
    const url = `/mindmaps/${id}`;
    return axiosClient.get(url);
  },
  create(payload) {
    const url = "/mindmaps";
    return axiosClient.post(url, payload);
  },
  update(id, payload) {
    const url = `/mindmaps/${id}`;
    return axiosClient.put(url, payload);
  },
  delete(id) {
    const url = `/mindmaps/${id}`;
    return axiosClient.delete(url);
  },
};

export default mindmapApi;
