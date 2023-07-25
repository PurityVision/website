import FreeTrial from '@/components/FreeTrial.tsx~'
import GetExtension from '@/components/GetExtension'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Image from 'next/image'
import Wave from '../../public/blue-wave.svg'

interface Props {
  id?: string
  className?: string
}
const Spacer: React.FC<Props> = ({ className, id }): JSX.Element => (
  <div id={id ?? ''} className={`${className ?? ''} w-full h-32`} />
)

export default function Home(): JSX.Element {
  return (
    <main>
      <Header />
      <FreeTrial />
      <Spacer className='bg-lightBlue' />
      <Hero />
      <Spacer className='bg-lightBlue' />
      <Image src={Wave} alt='' />
      <Spacer id='getExtensionTopSpacer' />
      <GetExtension />
      <Spacer />
      <Image src={Wave} className='rotate-180' alt='' />
    </main>
  )
}
