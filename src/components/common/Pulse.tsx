import styled from '@emotion/styled'
import React from 'react'

type Props = {
  color?: string
  size?: number
}
const Pulse = styled.div<Props>`
  position: relative;

  display: inline-block;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ color = '#000' }) => color};

  width: ${({ size = 24 }) => size}px;
  height: ${({ size = 24 }) => size}px;

  border-radius: 50%;

  color: #fff;

  z-index: 1;

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ color = '#000' }) => color};
    border-radius: 50%;
    z-index: -1;
    opacity: 0.7;
  }

  &::before {
    animation: pulse2 2s ease-out infinite;
  }

  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(0.9);
    }

    70% {
      transform: scale(1);
    }

    100% {
      transform: scale(0.9);
    }
  }

  @keyframes pulse2 {
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`

export default Pulse
