import styled from '@emotion/styled'
import { ReactNode } from 'react'

const Wrapper = styled.div`
  position: fixed;
  top: 20vh;

  height: 30vh;

  padding: 0 20px;

  opacity: 1;

  p {
    font-size: 1.5rem;
    font-weight: bold;

    color: #fff;
    text-align: center;
    word-break: keep-all;

    line-height: 1.4;

    &:not(:last-of-type) {
      margin-bottom: 24px;
    }
  }
`

type Props = {
  opacity: number
  children: ReactNode
}
function LandingMessage({ opacity, children }: Props) {
  return <Wrapper style={{ opacity }}>{children}</Wrapper>
}

export default LandingMessage
