import { useContext } from 'react'
import Spinner from '../Layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/githubContext'

//component function.
function UserResults() {
  const { users, loading } = useContext(GithubContext)

  // maps the user list.
  const listUsers = users.map((user) => {
    return <UserItem key={user.id} user={user} />
  })

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {listUsers}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default UserResults
