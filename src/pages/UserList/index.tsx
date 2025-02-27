import { useEffect, useState } from "react"
import { deleteUser, fetchUsers, patchUser } from "../../components/api/usersAPI";
import { useAuth } from "../../context/AuthContext";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { StatusMessage } from "../../components/utils/StatusMessage";

interface User {
  _id: string;
  name: string;
  email: string;
  type: string;
}

export function UserList() {
  const { token, logout } = useAuth();

  const [ users, setUsers ] = useState<User[]>([]);

  const [ status, setStatus ] = useState<number | null>(null);
  const [ message, setMessage ] = useState<string | null>(null);

  const [ reload, setReload ] = useState<number>(0);
  const [ statusMessageTrigger, setStatusMessageTrigger ] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchUsers(token, logout);
      let data: User[];
      if (response !== undefined) {
        data = await response.json()

        setUsers(data);
      }
    }
    fetchData();
    
  }, [setUsers, token, logout, reload]);

  const refreshUsers = () => setReload((prev) => prev + 1);

  const handleEditUser = async (_id: string, name: string, email: string, type: string) => {
    // const response = await patchUser(_id, name, email, type, logout, token);

    // if (response) {
    //   setStatus(response.status);
    //   setMessage(response.statusText);
    // }
  }

  const handleDeleteUser = async (_id: string) => {
    const response = await deleteUser(_id, token, logout);

    if (response) {
      setStatus(response.status);
      setMessage(response.statusText);
      setStatusMessageTrigger((prev) => prev + 1);
      refreshUsers();
    }
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <StatusMessage status={status} message={message} statusMessageTrigger={statusMessageTrigger} />

      <table className="table-auto">
        <thead>
          <tr>
            <th className="text-black px-4 py-2">Nome</th>
            <th className="text-black px-4 py-2">Email</th>
            <th className="text-black px-4 py-2">Tipo</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className={`${index % 2 === 0 ? "bg-gray-100" : ""}`}>
                <td className="text-black p-3 text-center">{user.name}</td>
                <td className="text-black p-3 text-center">{user.email}</td>
                <td className="text-black p-3 text-center">{user.type}</td>
                <td className="p-3 text-center"><button onClick={() => handleEditUser(user._id, user.name, user.email, user.type)}><FaPencilAlt /></button></td>
                <td className="p-3 text-center"><button onClick={() => handleDeleteUser(user._id)}><FaRegTrashAlt /></button></td>
              </tr>
            ))}
        </tbody>
      </table>

    </div>
  )
}