import { getUrl } from "."
import { apiFetch } from "./api"

export const createUser = async (name: string, email:string, type: string, password: string, logout: () => void, token: string | null) => {
  const url = getUrl() + '/users';

  return await apiFetch(url, token, logout, {
    method: 'POST',
    body: JSON.stringify({ name, email, type, password }),
  });

}