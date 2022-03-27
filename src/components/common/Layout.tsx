import styled from '@emotion/styled'

import AppBar from '@components/sections/AppBar'

const Wrapper = styled.main`
  width: 100%;
`

type Props = {
  children: React.ReactNode
}
function Layout({ children }: Props) {
  return (
    <Wrapper>
      {/* <AppBar /> */}
      {children}
    </Wrapper>
  )
}

export default Layout
