import Header from '@/components/header'
import LoginButton from '@/components/loginButton'
import { useSession } from 'next-auth/react'

const Account = (): JSX.Element => {
  const { data: session } = useSession()

  return (
    <>
      <Header />

      {session?.user === undefined
        ? <div>
          <p>Please sign in</p>
          <LoginButton />
        </div>
        : <div>
          <p>Welcome {session.user.email}</p>
        </div>}

      <div>
        account page
      </div>
    </>
  )
}

export default Account
