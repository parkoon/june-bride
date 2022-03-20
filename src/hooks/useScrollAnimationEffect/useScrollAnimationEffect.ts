import { useCallback, useEffect, useRef } from 'react'

import { SCENE } from './constants'
import { useCurrentScene } from './context'
import { getPrevScrollHeight } from './helpers'

function useScrollAnimationEffect() {
  const { currentScene, setCurrentScene } = useCurrentScene()
  const currentSceneElem = useRef<HTMLElement>()
  const prevScrollHeight = useRef<number>(0)

  const setCurrentSceneElem = useCallback(() => {
    currentSceneElem.current = document.getElementById(
      SCENE[currentScene].id
    ) as HTMLElement
  }, [currentScene])

  const updateCurrentScene = useCallback(() => {
    prevScrollHeight.current = getPrevScrollHeight(currentScene)

    if (
      window.scrollY >
      prevScrollHeight.current + window.innerHeight * SCENE[currentScene].long
    ) {
      if (currentScene > SCENE.length - 1) {
        return
      }
      setCurrentScene((prev) => {
        const next = prev + 1

        return next
      })
    }

    if (window.scrollY < prevScrollHeight.current) {
      // 브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지(모바일)
      if (currentScene === 0) return
      setCurrentScene((prev) => {
        const next = prev - 1

        return next
      })
    }
  }, [currentScene, setCurrentScene])

  const dispatchEvent = () => {
    if (!currentSceneElem.current) return

    const currentOffsetY = window.scrollY - prevScrollHeight?.current

    // 바운싱 효과로 음수가 나올 경우 예외처리
    if (currentOffsetY < 0) return

    const scrollHeight = currentSceneElem.current.clientHeight
    const CustomScrollEvent = new CustomEvent('customscroll', {
      detail: {
        scrollRatio: currentOffsetY / scrollHeight,
        currentOffsetY,
        scrollHeight,
      },
    })

    currentSceneElem.current.dispatchEvent(CustomScrollEvent)
  }

  useEffect(() => {
    setCurrentSceneElem()
    const handleScroll = () => {
      updateCurrentScene()
      dispatchEvent()
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [updateCurrentScene, setCurrentSceneElem])
}

export default useScrollAnimationEffect
