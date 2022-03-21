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
        >
          <GuidanceArticle.Header
            title="헤더"
            description={'여기는 설명이라는 \n 사실이다.'}
          />
          <GuidanceArticle.Body
            title="바디."
            description={'여기는 설명이라는 \n 사실이다.'}
          >
            CONTENT
          </GuidanceArticle.Body>
        </GuidanceArticle>
      ))}

      {/* <section style={{ bottom: '-770px', position: 'sticky' }}>
        <div style={{ height: '888px', background: 'green' }}>hello</div>
      </section>
      <section style={{ bottom: '-787px', position: 'sticky' }}>
        <div style={{ height: '888px', background: 'brown' }}>hello</div>
      </section>
      <section style={{ bottom: '-814px', position: 'sticky' }}>
        <div style={{ height: '888px', background: 'red' }}>hello</div>
      </section> */}
    </Wrapper>
  )
}

export default Guidance
