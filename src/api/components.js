import http from '../http'

export const getTableList = (params) => http({
  url: '/components/table',
  params: params
})
