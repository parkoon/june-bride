import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  background: #111;

  border-radius: 24px;
`

type Props = {
  x: number
  y: number
}
function LandingBox({ x, y }: Props) {
  return (
    <Wrapper
      className="landing-box"
      style={{
        transform: `matrix(${x}, 0, 0, ${y}, 0, 0)`,
      }}
    />
  )
}

export default LandingBox
