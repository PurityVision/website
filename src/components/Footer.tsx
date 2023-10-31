import React from 'react'
import Logo from '../../public/purity-logo.png'
import Image from 'next/image'
import Link from 'next/link'

const Footer = (): JSX.Element => {
  return (
    <div className='bg-lightBlue p-8'>
      <div className='flex flex-col gap-4 md:flex-row mx-auto max-w-2xl justify-between'>
        <div>
          <div className='flex items-center gap-4 mb-4'>
            <Image src={Logo} alt='' className='w-12' />
            <p className='text-xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-blue-400'>Purity Vision</p>
          </div>
          <p className='text-sm text-gray-800'>
            © 2023 purityvision.app
          </p>
        </div>
        <div className='flex flex-col justify-end'>
          <span className='text-sm text-gray-700 '>
            built by <Link href='https://twitter.com/greybonez' target='_blank' className='text-blue-400 border-transparent hover:text-green-400 transition-all border-b-2 hover:border-green-400' rel='noreferrer'>@greybonez</Link>
          </span>
        </div>

      </div>
    </div>
  )
}

export default Footer
