import { FormEvent, useState } from 'react'
import Button from './button'
import toast from 'react-hot-toast'

const FreeTrial = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [isSent, setIsSent] = useState(false)

  const handleBetaSignup = async (e: FormEvent): Promise<void> => {
    e.preventDefault()

    if (isSent || email === '') {
      return
    }

    const url = 'http://localhost:8080/trial-register'
    const body = { email }
    const options: RequestInit = {
      method: 'POST',
      body: JSON.stringify(body)
    }

    try {
      const res = await fetch(url, options)
      if (res.status === 200) {
        toast.success('Thank you! You should receive an email soon with your license')
        setIsSent(true)
      } else {
        toast.error(await res.text())
      }
      console.log(res)
    } catch (err) {
      console.error(err)
    } finally {
      setEmail('')
    }
  }

  return (
    <div>
      <div className='w-full py-4'>
        <div className='mx-auto w-fit gap-16 flex items-center justify-center'>
          <div>
            <h2 className='text-xl text-gray-700 font-semibold'>FREE BETA TRIAL</h2>
            <p className='text-sm'>Sign up for a free trial</p>
          </div>
          <form onSubmit={e => { void handleBetaSignup(e) }}>
            <input
              id='email'
              disabled={isSent}
              className='border px-4 py-2 rounded'
              placeholder='Your Email'
              type='email'
              required
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Button className='ml-4'>Get my free license</Button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default FreeTrial
