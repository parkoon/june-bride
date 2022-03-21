import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

type Context = [string, Dispatch<SetStateAction<string>>]
const GuidanceColorContext = createContext<Context[0]>('')
const GuidanceColorHandlerContext = createContext<Context[1]>(() => {})

type Provider = {
  children: ReactNode
  defaultColor?: string
}
export function GuidanceColorProvider({
  children,
  defaultColor = '#fff',
}: Provider) {
  const [value, handler] = useState(defaultColor)

  return (
    <GuidanceColorHandlerContext.Provider value={handler}>
      <GuidanceColorContext.Provider value={value}>
        {children}
      </GuidanceColorContext.Provider>
    </GuidanceColorHandlerContext.Provider>
  )
}

export const useGuidanceColor = () => useContext(GuidanceColorContext)
export const useGuidanceColorHandler = () =>
  useContext(GuidanceColorHandlerContext)
