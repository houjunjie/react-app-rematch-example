import User from '../service/user';

export const login = {
  state: {
    userInfo: {},
  },
  reducers: {
    login(state, data) {
      return {
        ...state,
        userInfo: data.userInfo,
      };
    }
  },
  effects: {
    async asyncLogin(params) {
      const { data } = await User.login(params);
      console.log(data, 'data')
      this.login(data)
      return data
    },
  },
};