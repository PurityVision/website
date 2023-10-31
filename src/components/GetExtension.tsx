import Image from 'next/image'
import { ReactNode, useEffect } from 'react'
import toast from 'react-hot-toast'
import RightCurveArrow from '../../public/Right-Curve-Arrow.svg'
import ChromeLogo from '../../public/chrome.svg'
import GithubLogo from '../../public/github.png'
import { ArrowLink } from './ArrowLink'
import Checkout from './Checkout'
import { loadStripe } from '@stripe/stripe-js'
import { getStripePrice } from '@/utils'

const StepTitle = ({ children }: { children: ReactNode }): JSX.Element => (
  <h2 className='text-3xl font-bold mb-2'>{children}</h2>
)

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '')
  .catch(err => console.log(err))

const GetExtension = (): JSX.Element => {
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
    <div id='get-started' className='px-8 sm:px-32'>
      <div className='mb-16 max-w-3xl'>
        <h1 className='text-4xl w-fit font-extrabold py-1 mb-4'>Get Started</h1>
      </div>

      <div className='flex flex-col md:flex-row gap-32 md:gap-4 justify-between'>
        {/* Install Step */}
        <div>
          <StepTitle>1. Install</StepTitle>
          <div className='mt-8'>
            <div>
              <p className='text-xl font-semibold'>Get on the Chrome store</p>
              <div className='flex items-center gap-4'>
                <Image src={ChromeLogo} alt='' className='h-fit' />
                <ArrowLink
                  text='Install Extension'
                  href='https://chrome.google.com/webstore/detail/purity-vision/ehejamagbbpikajgiienapjpoehgcpia'
                />
              </div>
            </div>

            <p className='my-8 font-bold'>OR</p>

            <div>
              <p className='text-xl font-semibold'>Install the latest release</p>
              <div className='flex items-center gap-2'>
                <Image src={GithubLogo} alt='' className='w-8 h-fit' />
                <ArrowLink
                  text='Get Latest Release'
                  target='_blank'
                  href='https://github.com/PurityVision/extension/releases/latest'
                />
              </div>
            </div>

          </div>
        </div>

        <Image src={RightCurveArrow} alt='' className='w-[150px] rotate-90 md:rotate-0 stroke-blue-400 text-blue-400 fill-blue-400' />

        {/* Subscribe Step */}
        <div>
          <StepTitle>2. Pay As You Go</StepTitle>
          <p className='text-xl my-8 border w-fit px-2 rounded border-green-400 bg-green-400'>
            <span className='text-xl font-extrabold'>{getStripePrice()}$</span> / 1k images
          </p>
          <div>
            <ul className='list-[square] my-8 px-4 text-lg lh-4'>
              <li>e.g. filtering a web page with 100 images costs ${(getStripePrice() / 1000 * 100).toFixed(4)}!</li>
              <li>No monthly minimum charge</li>
              <li>Only pay when the app is enabled and filtering images</li>
              <li>Never pay twice for the same image</li>
              <li>Cancel anytime</li>
            </ul>
            <Checkout />
            {/* {((session?.user) == null)
            ? <LoginButton>Start Now</LoginButton>
            : <Checkout />} */}
          </div>
        </div>

        <Image src={RightCurveArrow} alt='' className='w-[150px] rotate-90 md:rotate-0' />

        {/* Step 3 */}
        <div>
          <StepTitle>3. Enjoy</StepTitle>
          <div className='mt-8'>
            <p className='text-2xl'>Enjoy a pure web.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default GetExtension
