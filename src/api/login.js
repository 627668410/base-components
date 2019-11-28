import http from '../http'

export const login = (data) => http({
  url: '/user/login',
  method: 'post',
  data: data
})
