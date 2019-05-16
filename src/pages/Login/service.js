import { Fetch } from '../../utils'
const login = (params) => Fetch(`/api/v1/login`, { method: 'POST', body: { ...params } });

export default {
  login
}