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
      px-4 py-2 transition-colors bg-gradient-to-b from-blue-300 to-blue-500 font-bold hover:from-blue-500 rounded
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
      px-4 py-2 text-blue-300 bg-gradient-to-b from-white to-white hover:from-blue-200 hover:to-blue-500 hover:border-white transition-colors transition-border hover:bg-blue-300 rounded font-bold
      border-2 text-blue-300 border-blue-300 hover:text-white ${className ?? ''}
    `}
    type={type}
  >
    {children}
  </button>
)

export default Button
