import styled from '@emotion/styled'

const Wrapper = styled.main`
  width: 100%;
  background: rgba(0, 34, 0, 0.3);
`

type Props = {
  children: React.ReactNode
}
function Layout({ children }: Props) {
  return <Wrapper>{children}</Wrapper>
}

export default Layout
