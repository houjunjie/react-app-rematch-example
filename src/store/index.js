import { init } from '@rematch/core';
import { login } from '../models/login';

console.info(login);

const store = init({
  models: {
    login,
  },
});

export default store;