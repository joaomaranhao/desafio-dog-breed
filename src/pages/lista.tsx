import { NextPage } from 'next'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { api } from '../services/api'

const Lista: NextPage = () => {
  const { user } = useContext(AuthContext)

  useEffect(() => {
    api.get('/list').then(response => {
      console.log(response)
    })
  }, [])
  return (
    <>
      Lista
      <p>Olá {user?.email}</p>
    </>
  )
}

export default Lista
