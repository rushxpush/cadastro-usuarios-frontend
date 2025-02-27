import { useState } from "react";
import { Input } from "../../components/form/Input";
import { Button } from "../../components/ui/Button";
import { createUser } from "../../components/api/usersAPI";
import { useAuth } from "../../context/AuthContext";
import { StatusMessage } from "../../components/utils/StatusMessage";

export function UserCreate() {
  const { token, logout } = useAuth();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [type, setType] = useState<string>('');

  const [status, setStatus] = useState<number | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [ statusMessageTrigger, setStatusMessageTrigger ] = useState<number>(0);


  const submitPostRequest = async () => {
    const response = await createUser(name, email, type, password, logout, token);
    
    if (response) {
      setStatus(response.status);
      setMessage(response.statusText);
      setStatusMessageTrigger((prev) => prev + 1);
    }
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <StatusMessage status={status} message={message} statusMessageTrigger={statusMessageTrigger} />
      <Input label="Nome" type="text" handleInput={setName} />
      <Input label="Email" type="email" handleInput={setEmail} />
      <Input label="Tipo" type="text" handleInput={setType} />
      <Input label="Password" type="password" handleInput={setPassword} />
      <Button text="Criar Usuário" handleClick={submitPostRequest} />
    </div>
  )
}