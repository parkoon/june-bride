import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'

import {
  ENVELOPE_SCENE_ID,
  SCENE,
} from '@hooks/useScrollAnimationEffect/constants'
import { useCurrentScene } from '@hooks/useScrollAnimationEffect/context'
import { calcValues } from '@hooks/useScrollAnimationEffect/helpers'

import EnvelopeIcon from './EnvelopeIcon'

const Wrapper = styled.section`
  height: 600vh;

  background: yellow;
`

function Envelope() {
  const wrapper = useRef<HTMLElement>(null)

  const box = useRef<HTMLDivElement>(null)

  const { currentScene } = useCurrentScene()

  const isEnvelopScene = SCENE[currentScene].id === ENVELOPE_SCENE_ID

  console.log('isEnvelopScene', isEnvelopScene)

  const [iconTransition, setIconTransition] = useState({ scale: 1, y: 0 })

  const handleScroll = ({ detail }: any) => {
    console.log('ok...')
    const { scrollRatio, currentOffsetY, scrollHeight } = detail

    console.log('box.current.clientHeight', 120 * 3.25)
    setIconTransition((prev) => ({
      ...prev,
      scale: calcValues({
        values: [1, window.innerWidth / 120, { start: 0, end: 0.5 }],
        currentOffsetY,
        scrollHeight,
      }),
    }))

    setIconTransition((prev) => {
      if (!box.current) return prev
      console.log(
        'result',
        window.innerHeight -
          box.current.offsetTop +
          box.current.clientHeight -
          300
      )
      return {
        ...prev,
        y: calcValues({
          values: [
            0,
            window.innerHeight -
              box.current.offsetTop +
              box.current.clientHeight -
              window.innerWidth / 2, // 계산식 다시 생각하기
            { start: 0.5, end: 1 },
          ],
          currentOffsetY,
          scrollHeight,
        }),
      }
    })
  }

  useEffect(() => {
    if (!wrapper.current) return

    wrapper.current.addEventListener('customscroll', handleScroll)

    return () => {
      wrapper.current?.removeEventListener('customscroll', handleScroll)
    }
  }, [])
  return (
    <Wrapper id={ENVELOPE_SCENE_ID} ref={wrapper}>
      <EnvelopeIcon {...iconTransition} ref={box} show={isEnvelopScene} />
    </Wrapper>
  )
}

export default Envelope
