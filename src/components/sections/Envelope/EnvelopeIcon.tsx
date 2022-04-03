import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { forwardRef } from 'react'

import { letterPaperColors } from '@styles/theme'

const WIDTH = 120
const HEIGHT = 90

const Letter = styled.div<{ open: boolean; color: string; index: number }>`
  position: absolute;
  top: 0;
  width: 90%;
  height: 100%;
  background-color: ${({ color }) => color};
  border-radius: 4px;
  z-index: 2;
  transition: 0.5s;

  ${({ open, index }) =>
    open &&
    css`
      transition-delay: ${0.1 + index * 0.02}s;
      transform: translateY(-${index * 10}px);
    `}
`

const Wrapper = styled.div<{ open: boolean }>`
  height: ${HEIGHT}px;
  width: ${WIDTH}px;
  background-color: #393e46;
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 0;

  .lid {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    border-right: ${WIDTH / 2}px solid transparent;
    border-bottom: ${HEIGHT / 2}px solid transparent;
    border-left: ${WIDTH / 2}px solid transparent;
    transform-origin: top;
    transition: transform 0.1s linear;
  }

  /* Lid when closed */
  .lid.one {
    border-top: ${HEIGHT / 2}px solid #393e46;
    transform: rotateX(0deg);
    z-index: 3;
    transition-delay: 0.6s;
  }

  /* Lid when opened */
  .lid.two {
    border-top: ${HEIGHT / 2}px solid #393e46;
    transform: rotateX(90deg);
    z-index: 1;
    transition-delay: 0.5s;
  }

  .envelope {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    border-top: ${HEIGHT / 2}px solid transparent;
    border-right: ${WIDTH / 2}px solid #00adb5;
    border-bottom: ${HEIGHT / 2}px solid #00adb5;
    border-left: ${WIDTH / 2}px solid #eeeeee;
    z-index: 3;
  }

  ${({ open }) =>
    open &&
    css`
      .lid.one {
        transform: rotateX(90deg);
        transition-delay: 0s;
      }

      .lid.two {
        transform: rotateX(180deg);
        transition-delay: 0.1s;
      }
    `}
`

type Props = {
  open: boolean
}

const EnvelopeIcon = forwardRef<HTMLDivElement, Props>(({ open }, ref) => {
  return (
    <Wrapper open={open}>
      <div className="lid one"></div>
      <div className="lid two"></div>
      <div className="envelope"></div>

      {letterPaperColors.map((color, index) => (
        <Letter
          ref={ref}
          className="letter"
          key={color}
          open={open}
          color={color}
          index={letterPaperColors.length - index}
        />
      ))}
    </Wrapper>
  )
})

EnvelopeIcon.displayName = 'EnvelopeIcon'

export default EnvelopeIcon
