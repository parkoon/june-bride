import styled from '@emotion/styled'
import copy from 'copy-to-clipboard'
import { motion } from 'framer-motion'
import React from 'react'
import { toast } from 'react-toastify'

import Copy from '@icons/Copy'

import { figure } from '@styles/theme'

import { address } from './constants'

const Wrapper = styled(motion.button)`
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
  const handleClick = () => {
    copy(address)
    toast('주소를 복사했습니다. 안전운전 하세요.', { type: 'success' })
  }
  return (
    <Wrapper onClick={handleClick} whileTap={{ scale: 0.9 }}>
      <Copy color="#fff" />
      <span>복사하기</span>
    </Wrapper>
  )
}

export default MapCopyButton
