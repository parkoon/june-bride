import styled from '@emotion/styled'
import { ReactNode, forwardRef } from 'react'

import { ENVELOP_WRAPPER_SIZE } from './constants'

const Wrapper = styled.div`
  position: fixed;

  z-index: 1;
  top: 50%;
  left: 50%;

  width: ${ENVELOP_WRAPPER_SIZE}px;
  height: ${ENVELOP_WRAPPER_SIZE}px;

  border-radius: 24px;

  transform: translate(-50%, -50%);

  color: #fff;

  background: #111;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;

  will-change: transform;
`

type Props = {
  scale: number
  y: number
  opacity: number
  children: ReactNode
}

const EnvelopeWrapper = forwardRef<HTMLDivElement, Props>(
  ({ scale, y, children, opacity }, ref) => {
    return (
      <Wrapper
        ref={ref}
        style={{
          opacity,
          transform: `translate3d(-50%, calc(-50% + ${y}px), 0) scale(${scale})`,
        }}
      >
        {children}
      </Wrapper>
    )
  }
)

EnvelopeWrapper.displayName = 'EnvelopeWrapper'

export default EnvelopeWrapper
