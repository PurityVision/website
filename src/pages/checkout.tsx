import Button from '@/components/button'
import Header from '@/components/header'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Checkout (): JSX.Element {
  const router = useRouter()

  if (router.query.status === 'success') {
    return (
      <>
        <Header />
        <div className='p-8'>
          <h1 className='text-3xl font-bold mb-2'>✅ Order Confirmed! ✅</h1>
          <p className='mb-4'>Check your email for your license key.</p>
          <Button className='uppercase'>
            <Link href='#'>
              Get Extension
            </Link>
          </Button>
          <div className='mt-2'>
            <Link href='/' className='text-blue-400'>
              GO BACK
            </Link>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div>something went wrong with your payment</div>
      </>
    )
  }
}
