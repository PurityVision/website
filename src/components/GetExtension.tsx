import { getStripePricePerThousand } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, useEffect } from 'react'
import toast from 'react-hot-toast'
// import RightCurveArrow from '../../public/Right-Curve-Arrow.svg'
import ChromeLogo from '../../public/chrome.svg'
import GithubLogo from '../../public/github.png'
import popupScreenshot from '../../public/popup-screenshot.png'
import { ArrowLink } from './ArrowLink'
import Checkout from './Checkout'
import Button from './button'

const StepTitle = ({ children }: { children: ReactNode }): JSX.Element => (
  <h2 className='text-3xl font-bold mb-2'>{children}</h2>
)

const StepCard = ({ children, className }: { children: ReactNode, className?: string }): JSX.Element => (
  <div className={`w-full xl:w-1/3 p-4 md:p-8 rounded ${className ?? ''}`}>{children}</div>
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
    <div id='get-started' className='px-2 xl:px-8'>
      <div className='mb-16 max-w-3xl'>
        <h1 className='text-4xl w-fit font-extrabold py-1 mb-4'>Get Started</h1>
      </div>

      <div className='flex flex-col xl:flex-row gap-32 justify-between'>
        {/* Install Step */}
        <StepCard>
          <StepTitle>1. Install</StepTitle>
          <div className='mt-8'>
            <div>
              <p className='text-xl font-semibold mb-2'>Get on the Chrome store</p>
              <Link href='https://chrome.google.com/webstore/detail/purity-vision/ehejamagbbpikajgiienapjpoehgcpia' target='_blank' rel='noreferrer'>
                <Button className='flex gap-2'>
                  <Image src={ChromeLogo} alt='' className='h-fit' />
                  <span className='whitespace-nowrap'>Get Extension</span>
                </Button>
              </Link>
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
        </StepCard>

        {/* Subscribe Step */}
        <StepCard>
          <StepTitle>2. Subscribe</StepTitle>
          <div>
            <div className='my-8'>
              <span className='text-3xl font-extrabold'>${(getStripePricePerThousand()).toPrecision(3)}</span>
              <span className='font-semibold text-gray-600'> /1000 images</span>
            </div>
            <ul className='list-[square] my-8 px-4 text-lg lh-4'>
              <li>No monthly minimum charge</li>
              <li>Only pay when the app is enabled and filtering images</li>
              <li>Never pay twice for the same image</li>
              <li>Cancel anytime</li>
            </ul>
            <div className='my-4'>
              <a className='text-blue-400 border-transparent hover:text-green-400 transition-all border-b-2 hover:border-green-400 uppercase' href='https://k3v4s1ef850.typeform.com/to/zqZtEbzv' target='_blank' rel='noreferrer'>
                Try For Free
              </a>
            </div>
            <Checkout />
          </div>
        </StepCard>

        {/* Step 3 */}
        <StepCard>
          <StepTitle>3. Enjoy</StepTitle>
          <ol className='mt-4 text-xl list-decimal list-inside'>
            <li>Enter your license into the extension popup</li>
            <li>Enable the filter for your desired websites</li>
            <li>Enjoy a pure web!</li>
          </ol>
          <div className='mt-8'>
            <Image src={popupScreenshot} className='border' alt='' />
          </div>
        </StepCard>
      </div>
    </div>
  )
}

export default GetExtension
