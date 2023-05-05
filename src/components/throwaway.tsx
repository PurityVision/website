const Throwaway = (): JSX.Element => (
  <div className='p-8'>
    <div className='mb-16 flex flex-col gap-4'>
      <h1 className='text-2xl'>The Web can be a shocking place. Keep it pure with Purity Vision.</h1>

      <div>
        <p className='italic font-semibold'>Wait, what is it?</p>
        <p>
          Purity Vision is a tuneable browser extension that hides inappropriate images from the websites that you visit.
        </p>
      </div>

      <div>
        <p className='italic font-semibold'>How does it work?</p>
        <p>
          Purity Vision uses advanced Machine Learning and AI to detect inappropriate images with alarming efficiency.
        </p>
      </div>
    </div>

    <h2 className='text-xl font-semibold mt-4'>Automagically hide the bad stuff.</h2>
    <ul className='w-fit'>
      <li>
        <div className='flex gap-4 justify-between'>
          <span>Sexual Content</span>
          <span>❌</span>
        </div>
      </li>
      <li>
        <div className='flex justify-between'>
          <span>Violence & Gore</span>
          <span>❌</span>
        </div>
      </li>
      <li>
        <div className='flex justify-between'>
          <span>Nudity</span>
          <span>❌</span>
        </div>
      </li>
      <li>
        <div className='flex justify-between'>
          <span>NSFW Content</span>
          <span>❌</span>
        </div>
      </li>
    </ul>

    <h2 className='text-xl font-semibold mt-4'>Install the Browser Extension</h2>
    <h2 className='text-xl font-semibold mt-4'>Subscribe for $2.99/month</h2>
  </div>

)

export default Throwaway
