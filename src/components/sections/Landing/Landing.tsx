import { useEffect, useRef, useState } from 'react'

import ScrollDown from '@components/common/ScrollDown'

import { LANDING_SCENE_ID } from '@hooks/useScrollAnimationEffect/constants'
import { useCurrentScene } from '@hooks/useScrollAnimationEffect/context'
import { calcValues } from '@hooks/useScrollAnimationEffect/helpers'

import { ENVELOP_WRAPPER_SIZE } from '../Envelope/constants'
import LandingBox from './LandingBox'
import LandingImage from './LandingImage'
import LandingIntroMessage from './LandingIntroMessage'
import LandingMessage from './LandingMessage'

function Landing() {
  const { inScene, sceneLong } = useCurrentScene(LANDING_SCENE_ID)

  const [imageScaleAndOpacity, setImageScaleAndOpacity] = useState({
    scale: 1,
    opacity: 1,
  })
  const [introMessageOpacity, setIntroMessageOpacity] = useState(1)

  const [messageOpacityAndY, setMessageOpacityAndY] = useState({
    messageA: {
      opacity: 0,
      y: 20,
    },
    messageB: {
      opacity: 0,
      y: 20,
    },
    messageC: {
      opacity: 0,
      y: 20,
    },
  })

  const [messageWrapperOpacity, setMessageWrapperOpacity] = useState(1)

  const [landingBoxTransition, setLandingBoxTransition] = useState({
    x: 1,
    y: 1,
  })

  const sectionRef = useRef<HTMLElement>(null)

  const handleScroll = ({ detail }: any) => {
    const { scrollRatio, ...scrollHeightAntCurrentOffsetY } = detail

    // image opacity animation
    setImageScaleAndOpacity({
      scale: calcValues({
        values: [1, 1.4, { start: 0, end: 0.3 }],
        ...scrollHeightAntCurrentOffsetY,
      }),
      opacity: calcValues({
        values: [1, 0, { start: 0.5, end: 0.8 }],
        ...scrollHeightAntCurrentOffsetY,
      }),
    })

    // intro message animation
    setIntroMessageOpacity(
      calcValues({
        values: [1, 0, { start: 0, end: 0.25 }],
        ...scrollHeightAntCurrentOffsetY,
      })
    )

    setMessageOpacityAndY({
      messageA: {
        y: calcValues({
          values: [20, 0, { start: 0.25, end: 0.4 }],
          ...scrollHeightAntCurrentOffsetY,
        }),
        opacity: calcValues({
          values: [0, 1, { start: 0.25, end: 0.4 }],
          ...scrollHeightAntCurrentOffsetY,
        }),
      },
      messageB: {
        y: calcValues({
          values: [20, 0, { start: 0.35, end: 0.5 }],
          ...scrollHeightAntCurrentOffsetY,
        }),
        opacity: calcValues({
          values: [0, 1, { start: 0.35, end: 0.5 }],
          ...scrollHeightAntCurrentOffsetY,
        }),
      },
      messageC: {
        y: calcValues({
          values: [20, 0, { start: 0.45, end: 0.6 }],
          ...scrollHeightAntCurrentOffsetY,
        }),
        opacity: calcValues({
          values: [0, 1, { start: 0.45, end: 0.6 }],
          ...scrollHeightAntCurrentOffsetY,
        }),
      },
    })

    setMessageWrapperOpacity(
      calcValues({
        values: [1, 0, { start: 0.6, end: 0.8 }],
        ...scrollHeightAntCurrentOffsetY,
      })
    )

    setLandingBoxTransition({
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
          <LandingBox {...landingBoxTransition} />
          <LandingImage
            src="/images/landing.jpg"
            alt="landing-image"
            {...imageScaleAndOpacity}
          />
          <LandingIntroMessage opacity={introMessageOpacity} />
          <LandingMessage opacity={messageWrapperOpacity}>
            <p
              style={{
                opacity: messageOpacityAndY.messageA.opacity,
                transform: `translate3d(0px, ${messageOpacityAndY.messageA.y}px, 0px)`,
              }}
            >
              부디, 저희 두 사람의 결혼소식이 <br />
              여러분들의 마음속 불편한 짐이 아닌 <br />
              즐거운 소식으로 느껴지길 바랍니다.
            </p>
            <p
              style={{
                opacity: messageOpacityAndY.messageB.opacity,
                transform: `translate3d(0px, ${messageOpacityAndY.messageB.y}px, 0px)`,
              }}
            >
              결혼을 축복해주셔서 감사합니다.
            </p>
            <p
              style={{
                opacity: messageOpacityAndY.messageC.opacity,
                transform: `translate3d(0px, ${messageOpacityAndY.messageC.y}px, 0px)`,
              }}
            >
              또, 심란한 와중에도 귀한 발걸음 해주시는
              <br /> 하객 여러분들께도. 미리 감사의 인사를 전합니다.
            </p>
          </LandingMessage>
          <ScrollDown />
        </>
      )}
    </section>
  )
}

export default Landing
