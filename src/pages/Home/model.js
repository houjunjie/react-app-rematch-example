import Service from './service';

const home = {
  state: {
    title: '',
  },
  reducers: {
    title(state, data) {
      return {
        ...state,
        title: data.title,
      };
    }
  },
  effects: {
    async getTitle() {
      const { data } = await Service.getTitle();
      this.title(data)
      return data
    },
  },
};

export default home