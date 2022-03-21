import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'

import { GUIDANCE_SCENE_ID } from '@hooks/useScrollAnimationEffect/constants'

import GuidanceArticle from './GuidanceArticle'
import GuidanceIntro from './GuidanceIntro'

const Wrapper = styled.section``

const DUMMY = ['#00b894', '#00cec9', '#0984e3', '#e17055']
const GAP = 25

function Guidance() {
  const wrapper = useRef<HTMLElement>(null)

  const [relative, setRelative] = useState(false)

  const handleScroll = ({ detail }: any) => {
    const { scrollRatio, currentOffsetY, scrollHeight } = detail

    console.log(scrollRatio)
    if (scrollRatio > 0) {
      //   setRelative(true)
      console.log('scroll')
    }
  }

  useEffect(() => {
    if (!wrapper.current) return

    wrapper.current.addEventListener('customscroll', handleScroll)

    return () => {
      wrapper.current?.removeEventListener('customscroll', handleScroll)
    }
  }, [])
  return (
    <Wrapper ref={wrapper} id={GUIDANCE_SCENE_ID}>
      <GuidanceIntro />

      {DUMMY.map((color, index) => (
        <GuidanceArticle
          key={color}
          primary={color}
          gap={(DUMMY.length - index) * GAP}
          header={{
            title: 'lorem',
            description: 'Lorem ipsum dolor \n ipsum sit.',
          }}
          body={{
            title: 'lorem',
            description: 'Lorem ipsum dolor \n ipsum sit.',
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          nostrum repudiandae, velit nam incidunt numquam dicta aspernatur modi
          consectetur possimus mollitia dignissimos blanditiis earum porro
          laudantium nemo commodi ipsam maiores?
        </GuidanceArticle>
      ))}
    </Wrapper>
  )
}

export default Guidance
