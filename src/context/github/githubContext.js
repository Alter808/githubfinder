import { createContext, useReducer } from 'react'
import githubReducer from './githubReducer'
import { fetchUsers, getUser } from './githubActions'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  // Calls fetchUsers function and dispatch the get_users action in the Reducer.
  const loadUsers = async (text) => {
    setLoading()
    try {
      const data = await fetchUsers(text)
      dispatch({
        type: 'GET_USERS',
        payload: data,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const loadSingleUser = async (login) => {
    setLoading()
    try {
      const data = await getUser(login)
      dispatch({
        type: 'GET_USER',
        payload: data,
      })
    } catch (error) {
      console.log(error)
    }
  }
  //dispatch the set loading action in the reducer
  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING',
      loading: true,
    })
  }
  //clear the users state.
  const clearUsers = () => {
    dispatch({
      type: 'CLEAR_USERS',
      payload: [],
    })
  }

  const provider = (
    <GithubContext.Provider
      value={{
        ...state,
        loadUsers,
        clearUsers,
        loadSingleUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
  return provider
}

export default GithubContext
