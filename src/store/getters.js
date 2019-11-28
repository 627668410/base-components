const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  user: state => state.user.user,
  login: state => state.user.login,
  addRoutes: state => state.permission.addRoutes
}

export default getters
