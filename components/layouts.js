export const Fullwidth = ({children}) => {
  return (
    <div className="flex mb-4">
      <div className="w-full h-12">{children}</div>
    </div>
  )
}

export const TwoColumns = ({left, right}) => {
  return (
    <div className="flex">
      <div className="w-1/2 h-12">{left}</div>
      <div className="w-1/2 h-12">{right}</div>
    </div>
  )
}

export const ThreeColumns = ({left, children, right}) => {
  return (
    <div className="flex">
      <div className="w-1/6 h-12 m-6">{left}</div>
      <div className="w-2/3 h-12 m-6">{children}</div>
      <div className="w-1/6 h-12 m-6">{right}</div>
    </div>
  )
}
