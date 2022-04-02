import axios from 'axios'
const url = process.env.REACT_APP_GITHUB_URL

const github = axios.create({
  baseURL: url,
})
//makes the fetch to github API to get a list of users.
const fetchUsers = async (text) => {
  try {
    //variable para almacenar query params y pasarlos a la url
    const params = new URLSearchParams({
      q: text,
    })
    const response = await github.get(`${url}/search/users?${params}`)
    console.log(response)
    return response.data.items
  } catch (error) {
    return error
  }
}

//makes the fetch to github API to obtain a single user and his repos.
const getUser = async (login) => {
  try {
    const [user, repos] = await Promise.all([
      github.get(`${url}/users/${login}`),
      github.get(`${url}/users/${login}/repos`),
    ])
    return { user: user.data, repos: repos.data }
  } catch (error) {
    return error
  }
}

export { fetchUsers, getUser }
