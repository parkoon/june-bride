import { useEffect, useRef, useState } from 'react'

import { ENVELOPE_SCENE_ID } from '@hooks/useScrollAnimationEffect/constants'
import { useCurrentScene } from '@hooks/useScrollAnimationEffect/context'
import { calcValues } from '@hooks/useScrollAnimationEffect/helpers'

import EnvelopeIcon from './EnvelopeIcon'
import EnvelopeWrapper from './EnvelopeWrapper'

function Envelope() {
  const wrapper = useRef<HTMLElement>(null)

  const iconRef = useRef<HTMLDivElement>(null)

  const { inScene, sceneLong } = useCurrentScene(ENVELOPE_SCENE_ID)

  const box = useRef<HTMLDivElement>(null)

  const start = useRef<number>(0)

  const [openEnvelope, setOpenEnvelope] = useState(false)

  const [iconTransition, setIconTransition] = useState({
    scale: 1,
    y: 0,
    opacity: 1,
  })

  const handleScroll = ({ detail }: any) => {
    const { scrollRatio, currentOffsetY, scrollHeight } = detail

    if (!iconRef.current || !box.current) return

    const scaleRatio = (window.innerWidth * 0.9) / iconRef.current.clientWidth

    setOpenEnvelope(scrollRatio > 0.6)

    setIconTransition((prev) => ({
      ...prev,
      scale: calcValues({
        values: [1, scaleRatio, { start: 0, end: 0.5 }],
        currentOffsetY,
        scrollHeight,
      }),
    }))

    if (!start.current) {
      start.current =
        box.current.offsetTop +
        (box.current.clientHeight * scaleRatio - box.current.clientHeight) / 2
    }

    setIconTransition((prev) => {
      return {
        ...prev,
        y: calcValues({
          values: [0, start.current, { start: 0.5, end: 1 }],
          currentOffsetY,
          scrollHeight,
        }),
      }
    })
    setIconTransition((prev) => {
      return {
        ...prev,
        opacity: calcValues({
          values: [1, 0, { start: 1, end: 1 }],
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
    <section
      id={ENVELOPE_SCENE_ID}
      ref={wrapper}
      style={{ height: `${100 * sceneLong}vh` }}
    >
      {inScene && (
        <EnvelopeWrapper {...iconTransition} ref={box}>
          <EnvelopeIcon ref={iconRef} open={openEnvelope} />
        </EnvelopeWrapper>
      )}
    </section>
  )
}

export default Envelope
