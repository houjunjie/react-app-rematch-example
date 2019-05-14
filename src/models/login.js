import User from '../service/user';

console.info(User, 'User');

export const login = {
  state: {
    userInfo: {},
  },
  reducers: {
    login(state, payload) {
      return {
        ...state,
        userInfo: payload.userinfo,
      };
    }
  },
  effects: {
    async asyncLogin(params) {
      const { data } = await User.login(params);
      console.log(data, 'data')
      this.login(data.data)
    },
  },
};