import { createContext, ReactNode } from 'react'
import { setCookie } from 'nookies'
import { useRouter } from 'next/router'
import { api } from '../services/api'

type SignInCredentials = {
  email: string
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider ({ children }: AuthProviderProps) {
  const router = useRouter()

  async function signIn ({ email }: SignInCredentials) {
    try {
      const response = await api.post('register', {
        email
      })

      const { token } = response.data.user

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
    <AuthContext.Provider value={{ signIn }}>
      { children }
    </AuthContext.Provider>
  )
}
