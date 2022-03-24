import { useEffect, useRef, useState } from 'react'

import { LANDING_SCENE_ID } from '@hooks/useScrollAnimationEffect/constants'
import { useCurrentScene } from '@hooks/useScrollAnimationEffect/context'
import { calcValues } from '@hooks/useScrollAnimationEffect/helpers'

import { ENVELOP_WRAPPER_SIZE } from '../Envelope/constants'
import LandingBox from './LandingBox'
import LandingImage from './LandingImage'
import LandingIntroMessage from './LandingIntroMessage'

function Landing() {
  const { inScene, sceneLong } = useCurrentScene(LANDING_SCENE_ID)

  const [imageTransition, setImageTransition] = useState({
    scale: 1,
    opacity: 1,
  })

  const [introMessageTransition, setIntroMessageTransition] = useState({
    opacity: 0,
    y: 20,
  })

  const [landingBoxScale, setLandingBoxScale] = useState({ x: 1, y: 1 })

  const sectionRef = useRef<HTMLElement>(null)

  const handleScroll = ({ detail }: any) => {
    const { scrollRatio, ...scrollHeightAntCurrentOffsetY } = detail

    // Landing Image Event
    setImageTransition((prev) => ({
      ...prev,
      scale: calcValues({
        values: [1, 1.4, { start: 0, end: 0.3 }],
        ...scrollHeightAntCurrentOffsetY,
      }),
    }))

    // Intro Message Effect
    setIntroMessageTransition({
      opacity: calcValues({
        values: [1, 0, { start: 0, end: 0.3 }],
        ...scrollHeightAntCurrentOffsetY,
      }),
      y: calcValues({
        values: [20, 0, { start: 0, end: 0.3 }],
        ...scrollHeightAntCurrentOffsetY,
      }),
    })

    setImageTransition((prev) => ({
      ...prev,
      opacity: calcValues({
        values: [1, 0, { start: 0.5, end: 0.8 }],
        ...scrollHeightAntCurrentOffsetY,
      }),
    }))

    // Landing Box Effect
    setLandingBoxScale({
      x: calcValues({
        values: [
          1,
          1 * ((ENVELOP_WRAPPER_SIZE - 10) / window.innerWidth),
          { start: 0.8, end: 1 },
        ],
        ...scrollHeightAntCurrentOffsetY,
      }),
      y: calcValues({
        values: [
          1,
          1 * ((ENVELOP_WRAPPER_SIZE - 10) / window.innerHeight),
          { start: 0.8, end: 1 },
        ],
        ...scrollHeightAntCurrentOffsetY,
      }),
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
      id={LANDING_SCENE_ID}
      ref={sectionRef}
      style={{ height: `${100 * sceneLong}vh` }}
    >
      {inScene && (
        <>
          <LandingBox {...landingBoxScale} />
          <LandingImage
            src="/images/landing.jpg"
            alt="landing-image"
            {...imageTransition}
          />
          <LandingIntroMessage {...introMessageTransition} />
        </>
      )}
    </section>
  )
}

export default Landing
