import React, { createContext, useContext, useState } from 'react'

import { SCENE } from './constants'

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

export const useCurrentScene = (id?: string) => {
  const { currentScene, setCurrentScene } = useContext(CurrentSceneContext)

  const inScene = SCENE[currentScene].id === id
  const sceneLong = SCENE.find((scene) => scene.id === id)?.long || 0

  return {
    inScene,
    sceneLong,
    currentScene,
    setCurrentScene,
  }
}

export default CurrentSceneContextProvider
