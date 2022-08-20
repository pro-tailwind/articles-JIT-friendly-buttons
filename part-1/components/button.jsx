const baseClasses = 'rounded-md font-medium focus:outline-none'

const variantsLookup = {
  primary: 'bg-cyan-500 text-white shadow-lg hover:bg-cyan-400 focus:bg-cyan-400 focus:ring-cyan-500',
  secondary: 'bg-slate-200 text-slate-800 shadow hover:bg-slate-300 focus:bg-slate-300 focus:ring-slate-500',
  danger: 'bg-red-500 text-white shadow-lg uppercase tracking-wider hover:bg-red-400 focus:bg-red-400 focus:ring-red-500',
  text: 'text-slate-700 uppercase tracking-wider hover:underline hover:text-slate-600 hover:bg-slate-900/5 focus:text-slate-600 focus:ring-slate-500',
}

const sizesLookup = {
  small: 'px-3 py-1.5 text-sm focus:ring-2 focus:ring-offset-1',
  medium: 'px-5 py-3 focus:ring-2 focus:ring-offset-2',
  large: 'px-8 py-4 text-lg focus:ring focus:ring-offset-2',
}

export const Button = (props) => {
  const { variant = 'primary', size = 'medium', ...rest } = props
  return <button {...rest} className={`${baseClasses} ${variantsLookup[variant]} ${sizesLookup[size]}`} />
}
