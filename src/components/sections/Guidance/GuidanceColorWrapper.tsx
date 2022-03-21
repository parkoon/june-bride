import styled from '@emotion/styled'
import { ReactNode } from 'react'

import { useGuidanceColor } from './context'

const Wrapper = styled.section<{ color: string }>`
  background: ${({ color }) => color};

  transition: background 0.2s linear;

  padding: 40px 0;
`

type Props = {
  children: ReactNode
}
function GuidanceColorWrapper({ children }: Props) {
  const color = useGuidanceColor()

  return <Wrapper color={color}>{children}</Wrapper>
}

export default GuidanceColorWrapper
