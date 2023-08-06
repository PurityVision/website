// import ScrollButton from './scrollButton'

import Image from 'next/image'
import Link from 'next/link'
import ChromeLogo from '../../public/chrome.svg'
import Showcase from '../../public/purity-vision-screenshot.png'
import Button from './button'

const Hero: React.FC = (): JSX.Element => {
  return (
    <div className='px-8 sm:px-32 flex items-center bg-gradient-to-b from-white to-lightBlue'>
      <div className='w-full h-1/2 py-4'>
        <div className='w-fit mx-auto mb-8'>
          <div className='w-full my-8 justify-start align-center gap-4 sm:gap-8 flex'>
            <div className='flex items-center'>
              <p className='text-sm h-fit font-bold uppercase bg-gradient-to-r from-green-400 to-blue-400 rounded-xl px-4 text-white'>
                Coming Soon
              </p>
            </div>
            <a className='text-blue-400 border-transparent hover:text-green-400 transition-all border-b-2 hover:border-green-400 uppercase' href='https://k3v4s1ef850.typeform.com/to/zqZtEbzv' target='_blank'>
              Get Access
            </a>
          </div>
          <h1 className='text-6xl font-extrabold mb-8'>
            Keep the Web <span className='text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-blue-500'>Pure</span>
          </h1>
          <p className='text-xl'>
            Browse websites with&nbsp;
            <span className='text-green-400 font-bold'>peace of mind.</span>
          </p>
          <p className='text-xl'>
            Harness Google Machine Learning to filter&nbsp;
            <span className='text-red-400 font-bold'>explicit images.</span>
          </p>
        </div>
        <div className='border border-2 rounded-[10px] w-fit mx-auto'>
          <Image src={Showcase} alt='' priority />
        </div>
        <div className='mt-16 flex flex-col md:flex-row gap-4 justify-center'>
          <Link href='https://chrome.google.com/webstore/detail/purity-vision/ehejamagbbpikajgiienapjpoehgcpia' target='_blank'>
            <Button className='flex gap-2'>
              <Image src={ChromeLogo} alt='' className='h-fit' />
              <span>Get the Extension</span>
            </Button>
          </Link>
          <Button className='w-32' onClick={() => {
            const el = document.getElementById('get-started')
            if (el === undefined) return
            el?.scrollIntoView({ behavior: 'smooth' })
          }}>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
