import Image from 'next/image'
import Logo from '../../public/purity-logo.png'
import { OutlineButton } from './button'
import { toast } from 'react-hot-toast'

const billingURL = process.env.NEXT_PUBLIC_STRIPE_BILLING_URL

const Header: React.FC = (): JSX.Element => {
  return (
    <header className='flex flex-wrap gap-4 justify-between p-8 border-b'>
      <div className='flex items-center gap-4'>
        <Image src={Logo} alt='' className='w-12' />
        <p className='text-xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-blue-400'>Purity Vision</p>
      </div>
      <div className='w-full justify-between items-center sm:w-fit gap-4 sm:gap-16 flex justify-center'>
        <div>
          <p className='text-sm font-bold uppercase bg-gradient-to-r from-green-400 to-blue-400 rounded-xl px-4 text-white'>
            Coming Soon
          </p>
        </div>
        <a className='text-blue-400 border-transparent hover:text-green-400 transition-all border-b-2 hover:border-green-400 uppercase' href='https://k3v4s1ef850.typeform.com/to/zqZtEbzv' target='_blank'>
          Get Access
        </a>
      </div>
      <a href={billingURL} className='w-full md:w-fit'>
        <OutlineButton className='w-full md:w-fit' onClick={e => {
          e.preventDefault()
          toast.success('coming soon')
        }}>
          Manage Subscription
        </OutlineButton>
      </a>
    </header >
  )
}

export default Header
