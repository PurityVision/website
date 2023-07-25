import Button from './button'
import Logo from '../../public/purity-logo.png'
import Image from 'next/image'

const Header: React.FC = (): JSX.Element => {
  return (
    <header className='flex justify-between p-8 border-b shadow-sm'>
      <div className='flex items-center gap-4'>
        <Image src={Logo} alt='' className='w-12' />
        <p className='text-xl font-bold uppercase text-blue-400'>Purity Vision</p>
      </div>
      <Button>
        <a href='https://billing.stripe.com/p/login/test_5kAcPK8h1c376C4cMM'>
          Manage Subscription
        </a>
      </Button>

    </header >
  )
}

export default Header
