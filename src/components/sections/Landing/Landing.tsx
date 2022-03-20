import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'

import {
  LANDING_SCENE_ID,
  SCENE,
} from '@hooks/useScrollAnimationEffect/constants'
import { useCurrentScene } from '@hooks/useScrollAnimationEffect/context'
import { calcValues } from '@hooks/useScrollAnimationEffect/helpers'

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

  const [imageScale, setImageScale] = useState(1)

  const [introMessageTransition, setIntroMessageTransition] = useState({
    opacity: 0,
    y: 20,
  })

  const [landingBoxScale, setLandingBoxScale] = useState({ x: 1, y: 1 })

  const { currentScene } = useCurrentScene()

  const isLandingScene = SCENE[currentScene]?.id === LANDING_SCENE_ID

  const handleScroll = ({ detail }: any) => {
    const { scrollRatio, currentOffsetY, scrollHeight } = detail

    // Landing Image Event
    // if (scrollRatio < 0.3) {
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

    // Landing Box Effect
    setLandingBoxScale({
      x: calcValues({
        values: [1, 1 * (120 / window.innerWidth), { start: 0.7, end: 1 }],
        scrollHeight,
        currentOffsetY,
      }),
      y: calcValues({
        values: [1, 1 * (120 / window.innerHeight), { start: 0.7, end: 1 }],
        scrollHeight,
        currentOffsetY,
      }),
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
    <Wrapper id={LANDING_SCENE_ID} ref={wrapper}>
      {/* <LandingImage
        src="/images/landing.jpg"
        alt="landing-image"
        scale={imageScale}
      />
      <LandingIntroMessage {...introMessageTransition} /> */}

      <LandingBox {...landingBoxScale} show={isLandingScene} />
    </Wrapper>
  )
}

export default Landing
