import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  background: #000;
`

type Props = {
  x: number
  y: number
  show: boolean
}
function LandingBox({ x, y, show }: Props) {
  return (
    <Wrapper
      className="landing-box"
      style={{
        transform: `matrix(${x}, 0, 0, ${y}, 0, 0)`,
        opacity: show ? 1 : 0,
      }}
    />
  )
}

export default LandingBox
