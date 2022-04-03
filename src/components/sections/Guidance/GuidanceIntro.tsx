import styled from '@emotion/styled'
import React from 'react'

import { useChangeColorInView } from './hooks'

const Wrapper = styled.div`
  padding: 0 20px 100px 20px;

  h2 {
    font-weight: bold;
    font-size: 42px;

    margin-bottom: 24px;
  }

  p {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.4;
  }
`
function GuidanceIntro() {
  const colorTrigger = useChangeColorInView({ threshold: 1 })

  return (
    <Wrapper>
      <h2 ref={colorTrigger}>
        우리, <br />
        결혼합니다.
      </h2>
      <p>
        초록빛 싱그그러운 여름 <br />
        새로이 시작하는 작은 사랑이 <br />
        보다 크고 깊은 사람이 되려고 합니다. <br />
        함께 자리하시어 <br />
        축복해 주시면 가사하겠습니다. <br />
      </p>
    </Wrapper>
  )
}

export default GuidanceIntro
