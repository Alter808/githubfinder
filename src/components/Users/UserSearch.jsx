import { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/AlertContext'

function UserSearch() {
  //contexts for state management.
  const { users, loadUsers, clearUsers } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)
  const [text, setText] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      setAlert('enter something', 'error')
    } else {
      //algo de buscar
      loadUsers(text)
      setText('')
    }
  }

  const handleClear = () => {
    clearUsers()
  }
  //clear button.
  const clearButton = (
    <div>
      <div onClick={handleClear} className="btn btn-ghost btn-large">
        Clear
      </div>
    </div>
  )

  //the search form
  const searchForm = (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <div className="relative">
          <input
            type="text"
            className="w-full pr-40 bg-gray-200 input  input-lg text-black"
            placeholder="Search"
            value={text}
            onChange={handleChange}
          />
          <button
            className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
            type="submit"
          >
            GO
          </button>
        </div>
      </div>
    </form>
  )
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mb-8 gap-8">
      <div>{searchForm}</div>
      {users.length > 0 && clearButton}
      {/* button clear */}
    </div>
  )
}

export default UserSearch
