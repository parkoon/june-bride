import styled from '@emotion/styled'
import React from 'react'

import { breakpoint } from '@styles/theme'

import { ONLY_PC_SECTION_WIDTH } from '../OnlyPC/OnlyPC'

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 50%;
  text-align: center;

  width: 100%;

  transform: translateY(calc(-50% - 120px));
  font-size: 2.5rem;
  font-weight: bold;

  @media (min-width: ${breakpoint}px) {
    margin-left: ${ONLY_PC_SECTION_WIDTH / 2}px;
  }
`

type Props = {
  y: number
}
function EnvelopeMessage({ y }: Props) {
  return (
    <Wrapper style={{ top: `${y}%` }}>
      <h2>
        종혁 진아 결혼식에 <br />
        초대 합니다.
      </h2>
    </Wrapper>
  )
}

export default EnvelopeMessage
