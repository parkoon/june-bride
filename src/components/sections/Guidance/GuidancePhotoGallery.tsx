import styled from '@emotion/styled'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

import BottomSheet from '@components/common/BottomSheet'
import HorizontalScroll from '@components/common/HorizontalScroll'
import ThumbsUp from '@components/common/Lotties/ThumbsUp'
import { LottieProps } from '@components/common/Lotties/types'

import Message from '@icons/Message'
import Thumbs from '@icons/Thumbs'

import GuidanceArticle from './GuidanceArticle'
import PhotoCommentContainer from './PhotoCommentContainer'

const ImageWrapper = styled.div`
  position: relative;

  width: 232px;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  img {
    border-radius: 6px;
  }

  &:last-child {
    margin-right: 20px;
  }
`

const Content = styled.div`
  height: 42vh;
  width: 100%;
  padding-left: 20px;
`

const Footer = styled.div`
  display: flex;
  align-items: center;

  height: 50px;
  padding: 0 20px;
  margin: 12px 0;
`

const PHOTOS = new Array(11).fill(1)
type ThumbsState = 'up' | 'down' | 'none'
function GuidancePhotoGallery() {
  const lottieRef = useRef<LottieProps>(null)

  const [thumbs, setThumbs] = useState<ThumbsState>('none')

  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false)

  const handleThumbsUp = () => {
    setThumbs('up')
    lottieRef.current?.play()
    localStorage.setItem('thumbs', 'up')
  }

  const handleThumbsDown = () => {
    setThumbs('down')
    localStorage.setItem('thumbs', 'down')
  }

  useEffect(() => {
    setThumbs(localStorage.getItem('thumbs') as ThumbsState)
  }, [])

  return (
    <GuidanceArticle
      color="#0fb9b1"
      gap={50}
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
                onClick={() => alert('ok')}
                src={`/images/gallery/${index + 1}.jpg`}
                layout="fill"
                alt="photo"
                objectFit="cover"
              />
            </ImageWrapper>
          ))}
        </HorizontalScroll>
      </Content>
      <Footer>
        <Thumbs
          active={thumbs === 'up'}
          count={24}
          style={{ marginRight: 12 }}
          onClick={handleThumbsUp}
        />
        <Thumbs
          down
          active={thumbs === 'down'}
          style={{ marginRight: 'auto' }}
          onClick={handleThumbsDown}
        />
        <Message count={24} onClick={() => setIsBottomSheetVisible(true)} />
      </Footer>

      <ThumbsUp ref={lottieRef} />

      {isBottomSheetVisible && (
        <BottomSheet onClose={() => setIsBottomSheetVisible(false)}>
          <PhotoCommentContainer />
        </BottomSheet>
      )}
    </GuidanceArticle>
  )
}

export default GuidancePhotoGallery
