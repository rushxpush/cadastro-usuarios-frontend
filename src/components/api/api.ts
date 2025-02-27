export const apiFetch = async (url: string, token: string | null, logout: () => void, options: RequestInit = {}) => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : '',
        ...options.headers
      }
    })

    if (response.status === 401) {
      logout();
    }

    return response;
  } catch(error) {
    console.log(error)
    return undefined;
  }

}