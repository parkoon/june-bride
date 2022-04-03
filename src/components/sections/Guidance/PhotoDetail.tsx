import styled from '@emotion/styled'
import Image from 'next/image'
import React, { useState } from 'react'
import Slick, { Settings } from 'react-slick'

const PHOTOS = new Array(11).fill(1)

const Container = styled.div`
  position: relative;
`

const settings: Settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
}
function PhotoDetail() {
  return (
    <Slick {...settings}>
      {PHOTOS.map((key, index) => (
        <SlickItem key={key} src={`/images/gallery/${index + 1}.jpg`} />
      ))}
    </Slick>
  )
}
type Props = {
  src: string
}
function SlickItem({ src }: Props) {
  const [paddingTop, setPaddingTop] = useState('0')
  return (
    <Container style={{ paddingTop }} key={src}>
      <Image
        src={src}
        layout="fill"
        objectFit="contain"
        alt="photo"
        priority
        onLoad={({ target }) => {
          const { naturalWidth, naturalHeight } = target as HTMLImageElement
          setPaddingTop(`calc(100% / (${naturalWidth} / ${naturalHeight})`)
        }}
      />
    </Container>
  )
}

export default PhotoDetail
