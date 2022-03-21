import styled from '@emotion/styled'
import React from 'react'

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;

  height: 52px;
  padding: 0 20px;

  border-bottom: 1px solid #ddd;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: saturate(180%) blur(15px);

  z-index: 11;

  display: flex;
  align-items: center;

  h1 {
    font-size: 1.35rem;
    /* font-style: italic; */

    b {
      font-weight: bold;
    }
  }
`

function AppBar() {
  return (
    <Wrapper>
      <h1>
        <b>June</b> Bride
      </h1>
    </Wrapper>
  )
}

export default AppBar
