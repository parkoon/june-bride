import styled from '@emotion/styled'
import confetti from 'canvas-confetti'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const Wrapper = styled.canvas`
  position: absolute;

  left: 0;
  top: 0;

  height: 100%;
  width: 100%;
`

function Confetti() {
  const { ref, inView } = useInView({ threshold: 1 })

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement & {
      confetti: any
    }
    canvas.confetti =
      canvas.confetti ||
      confetti.create(canvas as HTMLCanvasElement, { resize: true })

    if (inView) {
      canvas.confetti({
        spread: 70,
        origin: { y: 1 },
      })
    }
  }, [inView])

  return <Wrapper id="canvas" ref={ref} />
}

export default Confetti
