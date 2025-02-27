import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Login } from './pages/Login/index.tsx'
import { UserCreate } from './pages/UserCreate/index.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { ProtectedRoute } from './pages/Login/ProtectedRoute.tsx'
import { UserList } from './pages/UserList/index.tsx'
import { Layout } from './components/layout/Layout.tsx'
import { UserUpdate } from './pages/UserUpdate/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={ <ProtectedRoute><UserCreate /></ProtectedRoute> } />
            <Route path="/cadastrar-usuario" element={ <ProtectedRoute><UserCreate /></ProtectedRoute> } />
            <Route path="/lista-de-usuarios" element={ <ProtectedRoute><UserList /></ProtectedRoute> } />
            <Route path="/editar-usuario/:id" element={ <ProtectedRoute><UserUpdate /></ProtectedRoute> } />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
