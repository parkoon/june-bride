import React, { createContext, useContext, useState } from 'react'

type Context = {
  setCurrentScene: React.Dispatch<React.SetStateAction<number>>
  currentScene: number
}
const CurrentSceneContext = createContext<Context>({} as Context)

type Props = {
  children: React.ReactNode
}
function CurrentSceneContextProvider({ children }: Props) {
  const [currentScene, setCurrentScene] = useState<number>(0)

  return (
    <CurrentSceneContext.Provider value={{ currentScene, setCurrentScene }}>
      {children}
    </CurrentSceneContext.Provider>
  )
}

export const useCurrentScene = () => useContext(CurrentSceneContext)

export default CurrentSceneContextProvider
