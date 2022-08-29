import axios from "axios"

const urlAutoGenerateUser = "https://randomuser.me/api"

export const submitAction = (input) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "SUBMIT_USER",
        payload: input,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const autoGenerateUserAction = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(urlAutoGenerateUser)
      const newUser = response?.data?.results?.[0]

      dispatch(submitAction(newUser))
    } catch (error) {
      console.log(error)
    }
  }
}

export const clearUsersAction = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "CLEAR_USERS",
      })
    } catch (error) {
      console.log(error)
    }
  }
}
