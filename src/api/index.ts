import axios from "./axios";

export default {
  find: async (id: string) => axios.get(`/${id}/health/status`),
};
