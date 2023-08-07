import FreeTrial from '@/components/FreeTrial'
import GetExtension from '@/components/GetExtension'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Image from 'next/image'
import Wave from '../../public/blue-wave.svg'
import Footer from '@/components/Footer'

interface Props {
  id?: string
  className?: string
}
const Spacer: React.FC<Props> = ({ className, id }): JSX.Element => (
  <div id={id ?? ''} className={`${className ?? ''} w-full h-12 sm:h-32`} />
)

export default function Home(): JSX.Element {
  return (
    <main>
      <Header />
      <Spacer />
      <Hero />
      <Spacer className='bg-lightBlue' />
      <Spacer className='bg-lightBlue' />
      <Image src={Wave} alt='' className='w-full' />
      <Spacer id='getExtensionTopSpacer' />
      <GetExtension />
      <Spacer />
      <Image src={Wave} className='w-full rotate-180' alt='' />
      <Footer />
    </main>
  )
}
