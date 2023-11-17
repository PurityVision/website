import { OutlineButton } from '@/components/button'
import Header from '@/components/header'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2022-11-15'
})

interface SuccessProps {
  name: string
  email: string
  license: string
}

export const getServerSideProps = (async (context: GetServerSidePropsContext) => {
  const session = await stripe.checkout.sessions.retrieve(context.query.session_id as string)
  const customer = await stripe.customers.retrieve(session.customer as string) as Stripe.Customer
  return {
    props: {
      name: customer.name as string,
      email: customer.email as string,
      license: customer.metadata.license
    }
  }
}) satisfies GetServerSideProps<SuccessProps>

export default function Success ({ name, email, license }: SuccessProps): JSX.Element {
  const router = useRouter()
  const stripeSessionID = router.query.session_id

  console.log(stripeSessionID)

  return (
    <>
      <Header />
      <div className='flex items-center justify-center'>
        <div className='border p-8 rounded-xl mt-32'>
          <h1 className='text-2xl font-semibold mb-8'>Order Complete️</h1>
          <p>Your License</p>
          <div className='shadow-inner rounded-xl px-4 py-2 bg-slate-100 flex gap-2 items-center'>
            <span className='select-none text-gray-700'>{license}</span>
            <OutlineButton onClick={() => {
              const type = 'text/plain'
              const blob = new Blob([license], { type })
              const data = [new ClipboardItem({ [type]: blob })]
              navigator.clipboard.write(data)
                .then(() => toast.success('copied to clipboard'))
                .catch(() => toast.error('failed to copy to clipboard'))
            }}
            >
              copy
            </OutlineButton>
          </div>
          <p className='mt-4'>Another copy of your license was sent to:</p>
          <p className='text-gray-700 mb-4'>{email}</p>
          <Link className='text-blue-400 underline mt-4' href='/'>Go Back</Link>
        </div>
      </div>
    </>
  )
}
