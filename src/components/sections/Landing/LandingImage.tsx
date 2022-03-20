import styled from '@emotion/styled'
import Image from 'next/image'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;

  transition: transform 0.1 ease-in-out;
`

type Props = {
  src: string
  alt: string
  scale: number
}
function LandingImage({ alt, src, scale }: Props) {
  return (
    <Wrapper style={{ transform: `matrix(${scale}, 0, 0, ${scale}, 0, 0)` }}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </Wrapper>
  )
}

export default LandingImage
