import styled from '@emotion/styled'
import React from 'react'

import Copy from '@icons/Copy'

import { figure } from '@styles/theme'

const Wrapper = styled.button`
  height: 40px;
  background-color: #222;

  display: flex;
  align-items: center;

  padding: 0 12px;
  color: #fff;

  border-radius: ${figure.borderRadius}px;

  > span {
    margin-left: 4px;
  }
`

function MapCopyButton() {
  return (
    <Wrapper>
      <Copy color="#fff" />
      <span>복사하기</span>
    </Wrapper>
  )
}

export default MapCopyButton
