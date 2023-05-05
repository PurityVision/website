import { ReactNode } from 'react'
import Button from './button'

interface Props {
  target: string
  children: ReactNode
}
const ScrollButton: React.FC<Props> = ({ target, children }) => {
  const handleClick = (): void => {
    const anchor = document.querySelector(target)
    if (anchor !== null) {
      anchor.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Button onClick={handleClick}>{children}</Button>
  )
}

export default ScrollButton
