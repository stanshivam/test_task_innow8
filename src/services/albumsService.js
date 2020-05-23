import SuperFetch from "../utils/superFetch";
import config from "../config";

export const albumsService = {
  getAlbums: async (ids) => {
    return await SuperFetch.get(`albums?ids=${ids}`);
  },
  submitNote: async (data) => {
    return await SuperFetch.post(`posts`, data, config.JSONPlaceholderAPI);
  },
};
