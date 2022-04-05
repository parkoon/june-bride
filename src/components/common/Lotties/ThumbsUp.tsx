import { css } from '@emotion/react'
import styled from '@emotion/styled'
import lottie, { AnimationItem } from 'lottie-web'
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import { breakpoint } from '@styles/theme'

import animationData from '../../../../public/lotties/thumbs-up.json'
import { LottieProps } from './types'

const Wrapper = styled.div<{ show?: boolean }>`
  position: fixed;

  ${({ show }) =>
    !show &&
    css`
      display: none;
    `}

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  /* PC 에서는 로띠 X, 위치 잡는데 머리아파 */
  @media (min-width: ${breakpoint}px) {
    display: none;
  }
`

const ThumbsUp = forwardRef<LottieProps>((_, ref) => {
  const lottieRef = useRef<HTMLDivElement>(null)

  const animationRef = useRef<AnimationItem>()
  const [show, setShow] = useState(false)

  useImperativeHandle(
    ref,
    () => ({
      play() {
        setShow(true)
        animationRef.current?.show()
        animationRef.current?.play()
      },
    }),
    []
  )

  useEffect(() => {
    if (lottieRef.current) {
      const animation = lottie.loadAnimation({
        loop: false,
        container: lottieRef.current,
        autoplay: false,
        animationData,
        renderer: 'svg',
      })

      animation.hide()

      animation.addEventListener('complete', () => {
        setShow(false)
        animation.stop()
        animation.hide()
      })

      animationRef.current = animation
    }

    return () => lottie.destroy()
  }, [])

  return <Wrapper ref={lottieRef} show={show} />
})

ThumbsUp.displayName = 'ThumbsUp'
export default ThumbsUp
