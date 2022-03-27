import styled from '@emotion/styled'

const Wrapper = styled.div`
  position: fixed;
  top: 20vh;

  width: 100%;

  padding: 0 20px;

  h3 {
    color: #fff;
    font-size: 2.5rem;
    font-weight: bold;

    text-align: center;
    word-break: keep-all;

    line-height: 1.4;
  }

  animation: fadeIn 0.45s forwards ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0px, 20%, 0px);
    }

    to {
      opacity: 1;
      transform: translate3d(0px, 0%, 0px);
    }
  }
`

type Props = {
  opacity: number
}
function LandingIntroMessage({ opacity }: Props) {
  return (
    <Wrapper>
      <h3 style={{ opacity }}>
        진심으로 사랑했던 <br />
        누군가가 있었나요?
      </h3>
    </Wrapper>
  )
}

export default LandingIntroMessage
