import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers:{
      "API-KEY": "4bea109a-f824-4ed0-afbb-d58aef7c5183"
  }
})

export default instance
