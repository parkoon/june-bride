import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'

import HorizontalScroll from '@components/common/HorizontalScroll'

import GuidanceArticle from './GuidanceArticle'

const ImageWrapper = styled.div`
  position: relative;

  width: 200px;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  img {
    border-radius: 6px;
  }

  &:last-child {
    margin-right: 20px;
  }
`

const Content = styled.div`
  height: 35vh;
`

const PHOTOS = new Array(11).fill(1)
function GuidancePhotoGallery() {
  return (
    <GuidanceArticle
      color="#0fb9b1"
      gap={25}
      header={{
        title: 'lorem',
        description: 'Lorem ipsum dolor \n ipsum sit.',
      }}
      body={{
        title: 'lorem',
        description: 'Lorem ipsum dolor \n ipsum sit.',
      }}
    >
      <Content>
        <HorizontalScroll>
          {PHOTOS.map((key, index) => (
            <ImageWrapper key={key}>
              <Image
                src={`/images/gallery/${index + 1}.jpg`}
                layout="fill"
                alt="photo"
                objectFit="cover"
              />
            </ImageWrapper>
          ))}
        </HorizontalScroll>
      </Content>
    </GuidanceArticle>
  )
}

export default GuidancePhotoGallery
