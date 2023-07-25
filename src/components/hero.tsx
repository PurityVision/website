// import ScrollButton from './scrollButton'

import Image from 'next/image'
import PurityLogo from '../../public/purity-logo.png'
import Showcase from '../../public/purity-vision-screenshot.png'
import Button from './button'

const Hero: React.FC = (): JSX.Element => {
  return (
    <div className='px-32 bg-white flex items-center bg-lightBlue'>
      <div className='w-full h-1/2 py-4'>
        <div className='w-fit mx-auto mb-8'>
          <p>PURITY VISION</p>
          <h1 className='text-4xl font-bold mb-8'>
            Keep the Web <span className='border-blue-400 border-b-8'>Pure.</span>
          </h1>
          <p className='text-xl'>
            Browse websites with&nbsp;
            <span className='text-green-400 font-bold'>peace of mind.</span>
          </p>
          <p className='text-xl'>
            Harness Google's Machine Learning to filter&nbsp;
            <span className='text-red-400 font-bold'>explicit images.</span>
          </p>
        </div>
        <div className='border border-2 rounded-[10px] w-fit mx-auto'>
          <Image src={Showcase} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Hero
