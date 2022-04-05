import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

type Context = [string, Dispatch<SetStateAction<string>>]
const LayoutBackgroundColorContext = createContext<Context[0]>('')
const LayoutBackgroundColorHandlerContext = createContext<Context[1]>(() => {})

type Provider = {
  children: ReactNode
  defaultColor?: string
}
export function LayoutBackgroundColorProvider({
  children,
  defaultColor = '#fff',
}: Provider) {
  const [value, handler] = useState(defaultColor)

  return (
    <LayoutBackgroundColorHandlerContext.Provider value={handler}>
      <LayoutBackgroundColorContext.Provider value={value}>
        {children}
      </LayoutBackgroundColorContext.Provider>
    </LayoutBackgroundColorHandlerContext.Provider>
  )
}

export const useLayoutBackgroundColor = () =>
  useContext(LayoutBackgroundColorContext)
export const useLayoutBackgroundColorHandler = () =>
  useContext(LayoutBackgroundColorHandlerContext)
