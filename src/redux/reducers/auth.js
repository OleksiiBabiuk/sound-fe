import { types } from '../actions/auth/types'

const initialState = {
  authenticated: false,
}

// eslint-disable-next-line default-param-last
const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case types.LOGIN_SUCCESSFUL:
      return { authenticated: true }

    default:
      return state
  }
}

export default authReducer
