import { useState } from "react";
import { Input } from "../../components/form/Input";
import { Button } from "../../components/ui/Button";

export function UserCreate() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');

  const submitPostRequest = async () => {
    const url = 'http://localhost:3000/users';
    console.log('submitPostRequest')
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          name, 
          email,
          password,
          type
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })

      console.log(response)
    }
    catch(error) {
      console.log('error: ', error);
    }

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