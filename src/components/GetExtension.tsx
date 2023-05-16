import { ArrowLink } from './ArrowLink'
import ChromeLogo from '../../public/chrome.svg'
import RightCurveArrow from '../../public/Right-Curve-Arrow.svg'
import Image from 'next/image'
import Checkout from './Checkout'
import toast from 'react-hot-toast'
import { useEffect } from 'react'

const StepTitle = ({ step }: { step: number }): JSX.Element => (
  <h2 className='text-4xl italic font-semibold mb-2'>Step {step}</h2>
)

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
    <div className='px-32'>
      <h1 className='text-4xl w-fit font-bold mb-16 border-blue-400 border-b-8'>Get Started</h1>

      <div className='flex justify-between'>
        {/* Step 1 */}
        <div>
          <StepTitle step={1} />

          <div className='px-12 py-8 border shadow-md rounded'>
            <h2 className='text-xl font-semibold mb-4'>Subscribe</h2>
            <ul className='list-disc'>
              <li>2000 unique image filters</li>
              <li>unlimited cache reliance</li>
            </ul>
            <p className='mb-4'>$4.00 / month</p>
            <Checkout />
            {/* {((session?.user) == null)
            ? <LoginButton>Start Now</LoginButton>
            : <Checkout />} */}
          </div>
        </div>

        <Image src={RightCurveArrow} alt='' className='w-[150px] stroke-blue-400 text-blue-400 fill-blue-400' />

        {/* Step 2 */}
        <div>
          <StepTitle step={2} />
          <div className='mt-8 flex items-center gap-4'>
            <Image src={ChromeLogo} alt='' className='h-fit' />
            <ArrowLink
              text='Install Extension'
              href='https://chrome.google.com/webstore/detail/grammarly-grammar-checker/kbfnbcaeplbcioakkpcpgfkobkghlhen'
            />
          </div>
        </div>

        <Image src={RightCurveArrow} alt='' className='w-[150px]' />

        {/* Step 3 */}
        <div>
          <StepTitle step={3} />
          <div className='mt-8'>
            <p className='text-2xl'>Enjoy a pure web.</p>
          </div>
        </div>

      </div>
    </div>

  )
}

export default GetExtension
