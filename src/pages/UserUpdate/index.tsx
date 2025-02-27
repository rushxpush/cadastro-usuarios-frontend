import { useEffect, useState } from "react";
import { fetchUserById, patchUser } from "../../components/api/usersAPI";
import { User } from "../../components/interfaces/user.interface";
import { useAuth } from "../../context/AuthContext";
import { StatusMessage } from "../../components/utils/StatusMessage";
import { Input } from "../../components/form/Input";
import { Button } from "../../components/ui/Button";
import { useParams } from "react-router";

export function UserUpdate() {
  const { id } = useParams();

  const { token, logout } = useAuth();
  
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [type, setType] = useState<string>('');

  const [ status, setStatus ] = useState<number | null>(null);
  const [ message, setMessage ] = useState<string | null>(null);

  const [ reload, setReload ] = useState<number>(0);
  const [ statusMessageTrigger, setStatusMessageTrigger ] = useState<number>(0);


  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const response = await fetchUserById(id, token, logout);
        let data: User;
        if (response !== undefined) {
          data = await response.json()
  
          setName(data.name);
          setEmail(data.email);
          setType(data.type);
        }
      }
    }
    fetchData();
    
  }, [id, setName, setEmail, setType, token, logout, reload]);

  const refreshUsers = () => setReload((prev) => prev + 1);

  const handlePatchRequest = async () => {
    if (id) {
      const response = await patchUser(id, name, email, type, logout, token);
  
      if (response) {
        setStatus(response.status);
        setMessage(response.statusText);
        setStatusMessageTrigger((prev) => prev + 1);
        refreshUsers();
      }
    }
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <StatusMessage status={status} message={message} statusMessageTrigger={statusMessageTrigger} />
      <Input label="Nome" value={name} type="text"  handleInput={setName} />
      <Input label="Email" value={email} type="email"  handleInput={setEmail} />
      <Input label="Tipo" value={type} type="text"  handleInput={setType} />
      <Button text="Alterar Usuário"  handleClick={handlePatchRequest} />
    </div>
  )
}