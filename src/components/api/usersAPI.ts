import { getUrl } from "."
import { apiFetch } from "./api"

const url = getUrl() + '/users';

export const createUser = async (name: string, email:string, type: string, password: string, logout: () => void, token: string | null) => {
  return await apiFetch(url, token, logout, {
    method: 'POST',
    body: JSON.stringify({ name, email, type, password }),
  });
}

export const patchUser = async (_id: string, name: string, email:string, type: string, logout: () => void, token: string | null) => {
  return await apiFetch(url + `/${_id}`, token, logout, {
    method: 'PATCH',
    body: JSON.stringify({ name, email, type }),
  });
}

export const fetchUsers = async (token: string, logout: () => void) => {
  return await apiFetch(url, token, logout, {
    method: 'GET'
  });
};

export const fetchUserById = async (_id: string,token: string, logout: () => void) => {
  return await apiFetch(url + `/${_id}`, token, logout, {
    method: 'GET'
  });
};

export const deleteUser = async (_id: string, token: string, logout: () => void) => {
  return await apiFetch(url + `/${_id}`, token, logout, {
    method: 'DELETE'
  });
};