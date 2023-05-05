import { signOut, useSession } from 'next-auth/react'
import LoginButton from './loginButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Link from 'next/link'

const ProfileMenu = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='relative inline-block'>
      <FontAwesomeIcon
        icon={faUser}
        onClick={() => setMenuOpen(!menuOpen)}
      />
      {menuOpen &&
        <div className='absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div
            className='p-4 rounded-md cursor-pointer hover:bg-gray-100 transition-colors'
          >
            <Link href='/account'>My Account</Link>
          </div>
          <div
            className='p-4 rounded-md cursor-pointer hover:bg-gray-100 transition-colors'
            onClick={() => { void signOut() }}
          >
            Sign out
          </div>
        </div>}
    </div>
  )
}

const Header: React.FC = (): JSX.Element => {
  const { data: session } = useSession()

  return (
    <header className='flex justify-between p-8 bg-slate-50 border-b shadow-sm'>
      {/* TODO: Use logo here. */}
      <p className='text-3xl uppercase font-bold'>
        Purity Vision
      </p>
      {session?.user == null
        ? <LoginButton />
        : <ProfileMenu />}

    </header>
  )
}

export default Header
