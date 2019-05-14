import axios from 'axios'
const login = (params) => axios.post(`http://rap2api.taobao.org/app/mock/3317/api/v1/login`, params)

export default {
  login
}