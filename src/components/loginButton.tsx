import { ReactNode } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Button from './button'

interface IProps {
  children?: ReactNode
}

const LoginButton = ({ children }: IProps): JSX.Element => {
  const { data: session } = useSession()

  if (session != null) {
    // console.log(session.user)
    return (
      <Button onClick={() => { void signOut() }}>Sign out</Button>
    )
  }
  return (
    <>
      <Button onClick={() => { void signIn('fusionauth') }}>{children ?? 'Sign In'}</Button>
    </>
  )
}

export default LoginButton
