import { ArrowLink } from './ArrowLink'
import Button from './button'
import ChromeLogo from '../../public/chrome.svg'
import Image from 'next/image'
import Checkout from './Checkout'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import LoginButton from './loginButton'

const GetExtension = (): JSX.Element => {
  const { data: session } = useSession()

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    if (query.get('success') !== null) {
      toast.success('Order placed! You will receive an email confirmation.')
    }

    if (query.get('canceled') !== null) {
      toast('Order canceled -- continue to shop around and checkout when you’re ready.')
    }
  }, [])

  return (
    <div className='px-32'>
      <h1 className='text-4xl mb-16'>Get Started</h1>

      <div className='flex justify-between'>
        {/* Step 1 */}
        <div className='px-12 py-8 border shadow-md rounded'>
          <h2 className='text-xl font-semibold mb-4'>Subscribe</h2>
          <ul className='list-disc'>
            <li>2000 unique image filters</li>
            <li>unlimited cache reliance</li>
          </ul>
          <p className='mb-4'>$4.00 / month</p>
          {((session?.user) == null)
            ? <LoginButton>Start Now</LoginButton>
            : <Checkout />}
        </div>

        {/* Step 2 */}
        <div className='flex items-center gap-4'>
          <Image src={ChromeLogo} alt='' className='h-fit' />
          <ArrowLink
            text='Install Extension'
            href='https://chrome.google.com/webstore/detail/grammarly-grammar-checker/kbfnbcaeplbcioakkpcpgfkobkghlhen'
          />
        </div>

        {/* Step 3 */}
        <div>
          enjoy a pure web
          <Button onClick={() => toast('hello world')}>Click Me</Button>
        </div>

      </div>
    </div>

  )
}

export default GetExtension
