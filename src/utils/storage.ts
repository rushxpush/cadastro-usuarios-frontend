export const getAuthToken = () => localStorage.getItem('cadastro_usuarios_access_token')
export const setAuthToken = (token: string) => localStorage.setItem('cadastro_usuarios_access_token', token);
export const clearAuthToken = () => localStorage.removeItem('cadastro_usuarios_access_token');