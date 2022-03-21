import styled from '@emotion/styled'

const Wrapper = styled.main`
  width: 100%;
`

type Props = {
  children: React.ReactNode
}
function Layout({ children }: Props) {
  return <Wrapper>{children}</Wrapper>
}

export default Layout
