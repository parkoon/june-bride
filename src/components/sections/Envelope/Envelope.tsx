import { useEffect, useRef, useState } from 'react'

import { LAYOUT_MAX_WIDTH } from '@components/common/Layout'
import ScrollDown from '@components/common/ScrollDown'

import { ENVELOPE_SCENE_ID } from '@hooks/useScrollAnimationEffect/constants'
import { useCurrentScene } from '@hooks/useScrollAnimationEffect/context'
import { calcValues } from '@hooks/useScrollAnimationEffect/helpers'

import EnvelopeIcon from './EnvelopeIcon'

function Envelope() {
  const sectionRef = useRef<HTMLElement>(null)

  const iconRef = useRef<HTMLDivElement>(null)

  const { inScene, sceneLong } = useCurrentScene(ENVELOPE_SCENE_ID)

  const start = useRef<number>(0)

  const [openEnvelope, setOpenEnvelope] = useState(false)

  const [iconTransition, setIconTransition] = useState({
    scale: 1,
    y: 0,
    opacity: 1,
  })

  const handleScroll = ({ detail }: any) => {
    const { scrollRatio, ...scrollHeightAntCurrentOffsetY } = detail

    if (!iconRef.current) return

    const scaleRatio =
      Math.min(LAYOUT_MAX_WIDTH, window.innerWidth) /
      iconRef.current.clientWidth

    setOpenEnvelope(scrollRatio > 0.2)

    setIconTransition((prev) => ({
      ...prev,
      scale: calcValues({
        values: [1, scaleRatio, { start: 0, end: 0.65 }],
        ...scrollHeightAntCurrentOffsetY,
      }),
    }))

    if (!start.current) {
      start.current =
        iconRef.current.offsetTop +
        (iconRef.current.clientHeight * scaleRatio -
          iconRef.current.clientHeight) /
          2
    }

    setIconTransition((prev) => {
      return {
        ...prev,
        y: calcValues({
          values: [0, start.current, { start: 0.65, end: 1 }],
          ...scrollHeightAntCurrentOffsetY,
        }),
      }
    })
    setIconTransition((prev) => {
      return {
        ...prev,
        opacity: calcValues({
          values: [1, 0, { start: 1, end: 1 }],
          ...scrollHeightAntCurrentOffsetY,
        }),
      }
    })
  }

  useEffect(() => {
    if (!sectionRef.current) return

    sectionRef.current.addEventListener('customscroll', handleScroll)

    return () => {
      sectionRef.current?.removeEventListener('customscroll', handleScroll)
    }
  }, [])
  return (
    <section
      id={ENVELOPE_SCENE_ID}
      ref={sectionRef}
      style={{ height: `${100 * sceneLong}vh` }}
    >
      {inScene && (
        <>
          <EnvelopeIcon {...iconTransition} ref={iconRef} open={openEnvelope} />
          <ScrollDown opacity={openEnvelope ? 0 : 1} />
        </>
      )}
    </section>
  )
}

export default Envelope
