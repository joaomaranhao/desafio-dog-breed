import { createContext, ReactNode } from 'react'
import { api } from '../services/api'

type SignInCredentials = {
  email: string
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>
  isAuthenticated: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider ({ children }: AuthProviderProps) {
  const isAuthenticated = false

  async function signIn ({ email }: SignInCredentials) {
    const response = await api.post('register', {
      email
    })
    console.log(response.data)
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      { children }
    </AuthContext.Provider>
  )
}
