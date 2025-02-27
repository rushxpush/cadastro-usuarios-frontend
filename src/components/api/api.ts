export const apiFetch = async (url: string, token: string | null, logout: () => void, options: RequestInit = {}) => {
  console.log('** apiFetch **');
  console.log('token: ', token)
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : '',
        ...options.headers
      }
    })

    const data = await response.json();

    if (response.status === 401) {
      logout();
    }

    if (!response.ok) {
      // throw new Error('Erro ao tentar fazer o login');
      return undefined;
    }

    return data;
  } catch(error) {
    console.log(error)
    return undefined;
  }

}