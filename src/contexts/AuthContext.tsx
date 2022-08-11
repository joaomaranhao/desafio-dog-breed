import { createContext, ReactNode, useState } from 'react'
import { setCookie } from 'nookies'
import { useRouter } from 'next/router'
import { api } from '../services/api'

type User = {
  email: string
}

type SignInCredentials = {
  email: string
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>
  user: User | undefined
  isAuthenticated: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider ({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()
  const router = useRouter()
  const isAuthenticated = !!user

  async function signIn ({ email }: SignInCredentials) {
    try {
      const response = await api.post('register', {
        email
      })

      const { token } = response.data.user

      setUser({
        email
      })

      setCookie(undefined, 'dogbreed.token', token, {
        maxAge: 60 * 60, // 1 hour
        path: '/'
      })

      api.defaults.headers.common.Authorization = token

      router.push('/lista')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      { children }
    </AuthContext.Provider>
  )
}
