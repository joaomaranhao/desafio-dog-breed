import { Label, TextInput } from 'flowbite-react'
import { FormEvent, useState } from 'react'
import { HiMail } from 'react-icons/hi'

export const RegisterForm = () => {
  const [email, setEmail] = useState('')

  function handleSubmit (event: FormEvent) {
    event.preventDefault()
    const data = {
      email
    }
    console.log({ data })
  }
  return (
    <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email"
            value="Seu email"
          />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="johndoe@mail.com"
          value={email}
          required={true}
          icon={HiMail}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div className='flex justify-between'>
        <button type="submit" className='mt-3 text-lg font-semibold
                bg-gray-800 w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-black'>
          Entrar
        </button>
      </div>
    </form>
  )
}
