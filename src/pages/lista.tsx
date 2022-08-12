import { Button } from 'flowbite-react'
import { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { api } from '../services/api'

const Lista: NextPage = () => {
  const [list, setList] = useState([])

  function handleBreedSelection (breed: string) {
    api.get(`/list?breed=${breed}`).then(response => setList(response.data.list))
  }

  useEffect(() => {
    api.get('/list').then(response => {
      setList(response.data.list)
    })
  }, [])
  return (
    <>
      <div className='container max-w-full mx-auto py-10'>
        <div className='max-w-sm mx-auto px-6'>
          <Button.Group>
            <Button color="dark" onClick={() => handleBreedSelection('chihuahua')}>
              Chihuahua
            </Button>
            <Button color="dark" onClick={() => handleBreedSelection('husky')}>
              Husky
            </Button>
            <Button color="dark" onClick={() => handleBreedSelection('pug')}>
              Pug
            </Button>
            <Button color="dark" onClick={() => handleBreedSelection('labrador')}>
              Labrador
            </Button>
          </Button.Group>
        </div>
        <div className='container mt-10 grid md:grid-cols-6 grid-cols-3 gap-4 mx-auto'>
            {list.map((image, index) => {
              return (
                <div className='w-full' key={index}>
                  <Image
                    src={image}
                    alt=''
                    objectFit='contain'
                    width='100%'
                    height='100%'
                  />
              </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default Lista
