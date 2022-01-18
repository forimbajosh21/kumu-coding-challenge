import axios from 'axios'

const axiosApi = axios.create({
  baseURL: process.env.REACT_APP_API,
})

export default axiosApi
