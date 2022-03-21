import styled from '@emotion/styled'
import React from 'react'

const Wrapper = styled.div`
  min-height: 100vh;

  padding: 0 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Container = styled.div`
  padding: 200px 0;
  h2 {
    font-weight: bold;
    font-size: 42px;

    margin-bottom: 24px;
  }

  p {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.4;
  }
`
function GuidanceIntro() {
  return (
    <Wrapper>
      <Container>
        <h2>
          Lorem, <br />
          ipsum.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut mollitia
          animi beatae minus aspernatur, illum debitis et ratione nobis neque
          accusamus illo deserunt amet vitae earum incidunt quia. Odit, officia!
        </p>
      </Container>
    </Wrapper>
  )
}

export default GuidanceIntro
