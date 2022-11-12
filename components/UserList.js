import { useEffect, useState } from "react"
import EditUser from "./EditUser"

import User from "./User"

const UserList = ({user}) => {
    const USER_API_BASE_URL="http://localhost:8080/api/v1/users"

    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)
    const [userId, setUserId] = useState(null)
    const [isIdSame, setIsIdSame] = useState(0)
    const [responseUser, setResponseUser] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(USER_API_BASE_URL, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const users = await response.json()
                setUsers(users)
            } catch (error) {
                console.error(error)
            }
            setLoading(false)
        }
        fetchData()
    }, [user, responseUser])

    const deleteUser = (e, id) => {
        e.preventDefault()
        fetch(USER_API_BASE_URL+"/"+id, {
            method: "DELETE"
        }).then(res => {
            if(users) {
                setUsers(users => users.filter(user => user.id !== id)) 
            }
        })
    }

    const editUser = (e, id) => {
        e.preventDefault()
        if(userId === id) {
            setIsIdSame(oldValue => oldValue + 1)
        } else {
            setIsIdSame(oldValue => oldValue + 1)
        }
        setUserId(id)
    }

  return (
    <>
    <div className="mx-auto my-8">
        <div className="flex shadow border-b">
            <table className="container mx-auto">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">First Name</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Last Name</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Email ID</th>
                        <th className="text-right font-medium text-gray-500 uppercase tracking-wide py-3 px-6">Actions</th>
                    </tr>
                </thead>
                {!loading && (
                <tbody className="bg-white">
                    {users?.map(user => (
                        <User key={user.id} user={user} deleteUser={deleteUser} editUser={editUser} />
                    ))}
                </tbody>
                )}
            </table>
        </div>
    </div>
    <EditUser id={userId} isIdSame={isIdSame} setResponseUser={setResponseUser} />
    </>
  )
}

export default UserList