import { Link } from "react-router"

export function Navbar() {
  return (
    <nav className="fixed flex w-full top-0 left-0 p-3 space-x-4 bg-white">
      <ul className="flex">
        <li className="mr-6">
          <Link to="cadastrar-usuario">Cadastrar Usuário</Link>
        </li>
        <li className="mr-6">
          <Link to="lista-de-usuarios">Lista de Usuários</Link>
        </li>
        <li className="mr-6">
          <Link to="login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}