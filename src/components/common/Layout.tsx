import styled from '@emotion/styled'

import { useLayoutBackgroundColor } from '@hooks/useLayoutBackgroundColor'

import { color } from '@styles/theme'

export const LAYOUT_MAX_WIDTH = 412
const Wrapper = styled.main<{ color: string }>`
  /* PC 대응 */
  width: 100%;
  max-width: ${LAYOUT_MAX_WIDTH}px;

  background: #f5f1e7;

  background: ${({ color }) => color};
  transition: background 0.2s linear;

  border-left: 1px solid ${color.gray};
  border-right: 1px solid ${color.gray};
`

type Props = {
  children: React.ReactNode
}
function Layout({ children }: Props) {
  const color = useLayoutBackgroundColor()

  return <Wrapper color={color}>{children}</Wrapper>
}

export default Layout
