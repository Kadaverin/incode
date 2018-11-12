export const isLoggedIn = (state) => !!state.auth.token && !!localStorage.getItem('token')
export const authUser = ({auth}) => auth.user