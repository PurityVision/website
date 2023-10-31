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
      px-4 py-4 uppercase transition-all hover:scale-110 font-bold hover:from-blue-500 rounded
      text-white bg-blue-400 ${className ?? ''}
    `}
    type={type}
  >
    {children}
  </button>
)

export const OutlineButton = ({
  children, onClick, className, type
}: IProps): JSX.Element => (
  <button
    onClick={onClick}
    className={`
      px-4 py-2 transition-all hover:scale-110 rounded font-bold
      border-2 text-blue-300 border-blue-300 ${className ?? ''}
    `}
    type={type}
  >
    {children}
  </button>
)

export default Button
