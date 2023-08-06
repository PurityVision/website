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
