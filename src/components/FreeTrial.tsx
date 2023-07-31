import { FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { OutlineButton } from './button'

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
      <div className='w-full px-8 py-4 border-b bg-green-100/50'>
        <div className='mx-auto items-start sm:w-fit gap-4 sm:gap-16 flex flex-col sm:flex-row sm:items-center justify-center'>
          <div>
            <p className='text-sm uppercase bg-gradient-to-r from-green-400 to-blue-400 rounded-xl px-4 text-white'>
              Sign up for a free trial
            </p>
          </div>
          <a href='https://k3v4s1ef850.typeform.com/to/zqZtEbzv' target='_blank'>
            <OutlineButton className='md:ml-4 w-full'>Join Waitlist</OutlineButton>
          </a>
          {/* <form onSubmit={e => { void handleBetaSignup(e) }}>
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
            <OutlineButton className='ml-4'>Join Waitlist</OutlineButton>
          </form>
 */}
        </div>
      </div>
    </div >
  )
}

export default FreeTrial
