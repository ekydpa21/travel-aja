const initialState = {
  users: [],
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SUBMIT_USER":
      return { ...state, users: [...state.users, action.payload] }
    case "CLEAR_USERS":
      return { ...state, users: [] }
    default:
      return state
  }
}

export default userReducer
