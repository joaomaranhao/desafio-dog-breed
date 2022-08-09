import type { NextPage } from 'next'
import { RegisterForm } from '../components/RegisterForm'

const Home: NextPage = () => {
  return (
    <div className='container max-w-full mx-auto py-24 px-6'>
      <div className='max-w-sm mx-auto px-6'>
        <div className='relative flex flex-wrap'>
          <div className='w-full relative'>
            <div className='mt-6'>
              <div className="text-center font-semibold text-black">
              Registre-se
              </div>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
