import cx from 'classnames'
import { ButtonHTMLAttributes } from 'react'

const baseClasses = 'rounded-md font-medium focus:outline-none'

const variantsLookup = {
  primary: 'bg-cyan-500 text-white shadow-lg hover:bg-cyan-400 focus:bg-cyan-400 focus:ring-cyan-500',
  secondary: 'bg-slate-200 text-slate-800 shadow hover:bg-slate-300 focus:bg-slate-300 focus:ring-slate-500',
  danger: 'bg-red-500 text-white shadow-lg hover:bg-red-400 focus:bg-red-400 focus:ring-red-500 uppercase',
  link: 'text-slate-700 text-hover:text-slate-600 focus:text-slate-600 focus:ring-slate-500',
}

const sizesLookup = {
  small: 'px-3 py-1.5 text-sm focus:ring-2 focus:ring-offset-1',
  medium: 'px-5 py-3 focus:ring-2 focus:ring-offset-2',
  large: 'px-8 py-4 text-lg focus:ring focus:ring-offset-2',
}

type ButtonVariant = keyof typeof variantsLookup
type ButtonSize = keyof typeof sizesLookup

type ButtonProps = {
  variant: ButtonVariant
  size: ButtonSize
}

export const Button = (props: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { variant, size } = props
  return <button className={cx(baseClasses, variantsLookup[variant], sizesLookup[size])} {...props} />
}

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
}
