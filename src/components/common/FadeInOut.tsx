import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { IntersectionOptions, useInView } from 'react-intersection-observer'

const Wrapper = styled.div<{ inView: boolean }>`
  opacity: 0;
  transform: translate3d(0, 30px, 0);

  transition: 0.5s;

  ${({ inView }) =>
    inView &&
    css`
      opacity: 1;
      transform: translate3d(0, 0, 0);
    `}
`

type Props = {
  children: ReactNode
  options?: IntersectionOptions
}
function FadeInOut({ children, options }: Props) {
  const view = useInView(options)

  return <Wrapper {...view}>{children}</Wrapper>
}

export default FadeInOut
