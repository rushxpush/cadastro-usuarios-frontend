import { getUrl } from "."

export const apiLogin = async (name: string, password: string): Promise<string | undefined> => {
  try {
    const response = await fetch(getUrl() + '/auth/login', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await response.json();

    if (!response.ok) {
      // throw new Error('Erro ao tentar fazer o login');
      return undefined;
    }

    return data.access_token;
  } catch(error) {
    console.log(error)
    return undefined;
  }
}

export const validateToken = async (token: string) => {
  console.log('token: ', token);
  return true;
}