
const User = ({user, deleteUser, editUser}) => {

  return (
    <tr key={user.id}>
        <td className="text-left px-6 py-4 whitespace-nowrap">
            <span className="text-sm text-gray-500">{user.firstName}</span>
        </td>
        <td className="text-left px-6 py-4 whitespace-nowrap">
            <span className="text-sm text-gray-500">{user.lastName}</span>
        </td>
        <td className="text-left px-6 py-4 whitespace-nowrap">
            <span className="text-sm text-gray-500">{user.emailId}</span>
        </td>
        <td className="text-right px-6 py-4 whitespace-nowrap">
            <a
            onClick={(e, id) => editUser(e, user.id)}
            className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4">Edit</a>
            <a
            onClick={(e, id) => deleteUser(e, user.id)}
            className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">Delete</a>
        </td>
    </tr>
  )
}

export default User