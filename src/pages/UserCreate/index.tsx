import { useState } from "react";
import { Input } from "../../components/form/Input";
import { Button } from "../../components/ui/Button";
import { createUser } from "../../components/api/usersAPI";
import { useAuth } from "../../context/AuthContext";

export function UserCreate() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');

  const { token, logout } = useAuth();

  const submitPostRequest = () => {
    createUser(name, email, type, password, logout, token);
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <Input label="Nome" type="text" handleInput={setName} />
      <Input label="Email" type="email" handleInput={setEmail} />
      <Input label="Tipo" type="text" handleInput={setType} />
      <Input label="Password" type="password" handleInput={setPassword} />
      <Button text="Criar Usuário" handleClick={submitPostRequest} />
    </div>
  )
}