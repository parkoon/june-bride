import styled from '@emotion/styled'
import Image from 'next/image'
import React, { useState } from 'react'
import Slick, { Settings } from 'react-slick'

const PHOTOS = new Array(11).fill(1)

const ImageIndex = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  text-align: center;
  margin-bottom: 7px;

  transform: translateX(-50%);
`
const ImageWrapper = styled.div`
  position: relative;
`

const SlickWrapper = styled.div`
  max-width: 420px;
  width: 100%;
  margin: 0 auto;
`

const settings: Settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
}
function PhotoDetail() {
  const [currentIndex, setCurrentIndex] = useState(1)
  const handleSwipe = (dir: string) => {
    switch (dir) {
      case 'left': {
        setCurrentIndex((prev) => (prev === PHOTOS.length ? 1 : prev + 1))
        return
      }
      case 'right': {
        setCurrentIndex((prev) => (prev === 1 ? PHOTOS.length : prev - 1))
        return null
      }
    }
  }
  return (
    <>
      <ImageIndex>
        {currentIndex} / {PHOTOS.length}
      </ImageIndex>

      <SlickWrapper>
        <Slick {...settings} onSwipe={handleSwipe}>
          {PHOTOS.map((key, index) => (
            <SlickItem key={key} src={`/images/gallery/${index + 1}.jpg`} />
          ))}
        </Slick>
      </SlickWrapper>
    </>
  )
}
type Props = {
  src: string
}
function SlickItem({ src }: Props) {
  const [paddingTop, setPaddingTop] = useState('0')
  return (
    <ImageWrapper style={{ paddingTop }} key={src}>
      <Image
        src={src}
        layout="fill"
        objectFit="contain"
        alt="photo"
        onLoad={({ target }) => {
          const { naturalWidth, naturalHeight } = target as HTMLImageElement
          setPaddingTop(`calc(100% / (${naturalWidth} / ${naturalHeight})`)
        }}
      />
    </ImageWrapper>
  )
}

export default PhotoDetail
