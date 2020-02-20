import Vue from 'vue';
import uploadSdk from '../../utils/uploadSdk';

export default {
  state: {
    isUploading: false,
    imgSource: '',
  },
  mutations: {
    IMAGE_UPLOAD(state, data) {
      state.imgSource = data;
    },
    IS_UPLOADING_IMAGE(state) {
      state.isUploading = !state.isUploading;
    }
  },
  actions: {
    async uploadSingleImage({commit}, data) {
      commit('IS_UPLOADING_IMAGE');
      const image = await uploadSdk.upload(data);
      commit('IMAGE_UPLOAD', image);
    }
  },
  getters: {
    getImage: state => state.imgSource,
  }
};
