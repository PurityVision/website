import Header from '@/components/header'
import GetExtension from '@/components/GetExtension'
import Hero from '@/components/hero'
import HeroTransition from '../../public/hero-transition.svg'
import Image from 'next/image'

interface Props {
  id?: string
  className?: string
}
const Spacer: React.FC<Props> = ({ className, id }): JSX.Element => (
  <div id={id ?? ''} className={`${className ?? ''} w-full h-32`} />
)

export default function Home (): JSX.Element {
  return (
    <main>
      <Header />

      <Spacer className='bg-slate-200' />
      <Hero />
      {/* <Spacer className='bg-slate-200' /> */}
      <Image src={HeroTransition} alt='' />

      <Spacer id='getExtensionTopSpacer' />
      <GetExtension />
      <Spacer />
      <Image src={HeroTransition} className='rotate-180' alt='' />

    </main>
  )
}
