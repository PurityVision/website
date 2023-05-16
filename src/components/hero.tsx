// import ScrollButton from './scrollButton'

const Hero: React.FC = (): JSX.Element => {
  return (
    <div className='px-32 bg-slate-200 flex items-center'>
      <div className='flex justify-between w-full h-1/2'>
        <div>
          <p>PURITY VISION</p>
          <h1 className='text-4xl font-bold'>Keep the Web <span className='border-blue-400 border-b-8'>Pure.</span></h1>
          <div className='w-fit mt-8'>
            {/* <ScrollButton target='#getExtensionTopSpacer'>Start Now</ScrollButton> */}
            {/* {((session?.user) == null)
              ? <LoginButton>Start Now</LoginButton>
              : <ScrollButton target='#getExtensionTopSpacer'>Start Now</ScrollButton>} */}
          </div>
        </div>

        {/* TODO: cool animated spline thingerino */}
        <div className='bg-red-100 h-48 w-48' />
      </div>
    </div>
  )
}

export default Hero
