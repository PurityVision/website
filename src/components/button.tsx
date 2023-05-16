import { MouseEventHandler, ReactNode } from 'react'

interface IProps {
  children: ReactNode
  onClick?: MouseEventHandler
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
}
const Button = ({
  children, onClick, className, type
}: IProps): JSX.Element => (
  <button
    onClick={onClick}
    className={`
      px-4 py-2 transition-colors shadow-md hover:bg-blue-300 rounded
      text-white bg-blue-400 ${className ?? ''}
    `}
    type={type}
  >
    {children}
  </button>
)

export default Button
