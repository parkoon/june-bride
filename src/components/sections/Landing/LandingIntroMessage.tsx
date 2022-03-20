import styled from '@emotion/styled'

const Wrapper = styled.div`
  position: fixed;
  top: 20vh;

  height: 30vh;

  padding: 0 20px;

  opacity: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 2rem;
    font-weight: bold;

    color: #fff;
    text-align: center;
    word-break: keep-all;

    line-height: 1.4;
  }
`

type Props = {
  opacity: number
  y: number
}
function LandingIntroMessage({ opacity, y }: Props) {
  return (
    <Wrapper style={{ opacity, transform: `translate3d(0px, ${y}%, 0px)` }}>
      <h3>
        공무원의 신분과 정치적 중립성은
        <br /> 법률이 정하는 바에 의하여 보장된다.
        <br />
        국회는 의장 1인과 부의장 2인을 선출한다.
        <br />
      </h3>
    </Wrapper>
  )
}

export default LandingIntroMessage
