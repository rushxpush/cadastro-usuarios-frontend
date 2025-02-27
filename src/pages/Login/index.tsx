import { useState } from "react";
import { Input } from "../../components/form/Input";
import { Button } from "../../components/ui/Button";
import { useAuth } from "../../context/AuthContext";

export function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const loginUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    login(user, password);
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <Input label="Usuário" type="text" handleInput={setUser} />
      <Input label="Senha" type="password" handleInput={setPassword} />
      <Button text="Login" handleClick={loginUser} />
    </div>
  )
}