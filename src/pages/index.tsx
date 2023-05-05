import Header from '@/components/header'
import GetExtension from '@/components/GetExtension'
import Hero from '@/components/hero'

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
      <Spacer className='bg-slate-200' />

      <Spacer id='getExtensionTopSpacer' />
      <GetExtension />
      <Spacer />

      {/* TODO: remove */}
      <Spacer className='bg-red-200 h-[1200px]' />

    </main>
  )
}
