import styled from '@emotion/styled'
import { forwardRef } from 'react'

const Wrapper = styled.div`
  position: fixed;

  top: 50%;
  left: 50%;

  width: 120px;
  height: 120px;

  transform: translate(-50%, -50%);

  color: #fff;

  background: red;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
`

type Props = {
  show: boolean
  scale: number
  y: number
}

const EnvelopeIcon = forwardRef<HTMLDivElement, Props>(
  ({ scale, y, show }, ref) => {
    return (
      <Wrapper
        ref={ref}
        style={{
          opacity: show ? 1 : 0,
          transform: `translate3d(-50%, calc(-50% + ${y}px), 0) scale(${scale})`,
        }}
      >
        데미안 데이트 잘 하고 있나요
      </Wrapper>
    )
  }
)

EnvelopeIcon.displayName = 'EnvelopeIcon'

export default EnvelopeIcon
