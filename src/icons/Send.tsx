import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import React from 'react'

import MotionButton from '@components/common/MotionButton'

import { figure } from '@styles/theme'

const Wrapper = styled(MotionButton)`
  background: #636e72;
  border-radius: ${figure.borderRadius}px;
  padding: 4px;
  padding-right: 7px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;
`

type Props = {
  onClick?(): void
}
function Send({ onClick }: Props) {
  return (
    <Wrapper onClick={onClick}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.71 4.29C27.575 4.15567 27.4045 4.06267 27.2185 4.02192C27.0325 3.98118 26.8388 3.99439 26.66 4.06L4.66 12.06C4.47027 12.132 4.30692 12.2599 4.19165 12.427C4.07638 12.594 4.01465 12.7921 4.01465 12.995C4.01465 13.1979 4.07638 13.396 4.19165 13.563C4.30692 13.73 4.47027 13.858 4.66 13.93L13.25 17.36L19.59 11L21 12.41L14.63 18.78L18.07 27.37C18.1441 27.5561 18.2724 27.7156 18.4382 27.8279C18.604 27.9402 18.7997 28.0002 19 28C19.2021 27.9959 19.3982 27.9306 19.5624 27.8127C19.7266 27.6949 19.8513 27.5301 19.92 27.34L27.92 5.34C27.9881 5.16308 28.0046 4.97043 27.9674 4.78452C27.9302 4.59862 27.8409 4.42711 27.71 4.29Z"
          fill="white"
        />
      </svg>
    </Wrapper>
  )
}

export default Send
