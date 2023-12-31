import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { MouseEventHandler } from 'react'

interface IProps {
  text: string
  direction?: 'left' | 'right'
  onClick?: MouseEventHandler
  target?: string
  href: string
}

export const ArrowLink = ({ text, href, direction = 'right', onClick, target = '_self' }: IProps): JSX.Element => (
  <Link
    className={`
      text-blue-400
      group
      flex
      ${direction === 'left' ? 'flex-row-reverse' : ''}
      gap-3
      items-center
      block
      w-fit
    `}
    target={target}
    href={href}
    onClick={onClick}
  >
    <span className='group-hover:text-blue-600'>{text}</span>
    <FontAwesomeIcon
      icon={faArrowRight}
      className={`
        h-4
        ${direction === 'left'
          ? 'group-hover:-translate-x-2 rotate-180'
          : 'group-hover:-rotate-45'
        }
        group-hover:text-blue-600 transition-all text-blue-400
      `}
    />
  </Link>
)
