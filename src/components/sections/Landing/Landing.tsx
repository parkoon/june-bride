import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'

import {
  LANDING_SCENE_ID,
  SCENE,
} from '@hooks/useScrollAnimationEffect/constants'
import { useCurrentScene } from '@hooks/useScrollAnimationEffect/context'
import { calcValues } from '@hooks/useScrollAnimationEffect/helpers'

import { ENVELOP_WRAPPER_SIZE } from '../Envelope/constants'
import LandingBox from './LandingBox'
import LandingImage from './LandingImage'
import LandingIntroMessage from './LandingIntroMessage'

const Wrapper = styled.section`
  height: 500vh;

  /* background: #000; */
  /* z-index: -99; */
`

function Landing() {
  const wrapper = useRef<HTMLElement>(null)

  const { currentScene } = useCurrentScene()

  const [showLandingBox, setShowLandingBox] = useState(false)

  const [imageScale, setImageScale] = useState(1)

  const [imageOpacity, setImageOpacity] = useState(1)

  const [introMessageTransition, setIntroMessageTransition] = useState({
    opacity: 0,
    y: 20,
  })

  const [landingBoxScale, setLandingBoxScale] = useState({ x: 1, y: 1 })

  const handleScroll = ({ detail }: any) => {
    const { scrollRatio, currentOffsetY, scrollHeight } = detail

    // Landing Image Event
    setImageScale(
      calcValues({
        values: [1, 1.4, { start: 0, end: 0.3 }],
        scrollHeight,
        currentOffsetY,
      })
    )

    // Intro Message Effect
    setIntroMessageTransition({
      opacity: calcValues({
        values: [1, 0, { start: 0, end: 0.3 }],
        scrollHeight,
        currentOffsetY,
      }),
      y: calcValues({
        values: [20, 0, { start: 0, end: 0.3 }],
        scrollHeight,
        currentOffsetY,
      }),
    })

    setImageOpacity(
      calcValues({
        values: [1, 0, { start: 0.5, end: 0.8 }],
        scrollHeight,
        currentOffsetY,
      })
    )

    // Landing Box Effect
    setLandingBoxScale({
      x: calcValues({
        values: [
          1,
          1 * ((ENVELOP_WRAPPER_SIZE - 10) / window.innerWidth),
          { start: 0.8, end: 1 },
        ],
        scrollHeight,
        currentOffsetY,
      }),
      y: calcValues({
        values: [
          1,
          1 * ((ENVELOP_WRAPPER_SIZE - 10) / window.innerHeight),
          { start: 0.8, end: 1 },
        ],
        scrollHeight,
        currentOffsetY,
      }),
    })
  }

  useEffect(() => {
    setShowLandingBox(SCENE[currentScene].id === LANDING_SCENE_ID)
  }, [currentScene])

  useEffect(() => {
    if (!wrapper.current) return

    wrapper.current.addEventListener('customscroll', handleScroll)

    return () => {
      wrapper.current?.removeEventListener('customscroll', handleScroll)
    }
  }, [])

  return (
    <Wrapper id={LANDING_SCENE_ID} ref={wrapper}>
      {showLandingBox && <LandingBox {...landingBoxScale} />}
      <LandingImage
        src="/images/landing.jpg"
        alt="landing-image"
        scale={imageScale}
        opacity={imageOpacity}
      />
      <LandingIntroMessage {...introMessageTransition} />
    </Wrapper>
  )
}

export default Landing
