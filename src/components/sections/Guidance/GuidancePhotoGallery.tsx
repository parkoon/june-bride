import styled from '@emotion/styled'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

import BottomSheet from '@components/common/BottomSheet'
import HorizontalScroll from '@components/common/HorizontalScroll'
import ThumbsUp from '@components/common/Lotties/ThumbsUp'
import { LottieProps } from '@components/common/Lotties/types'

import { useComments } from '@hooks/useComments'

import Message from '@icons/Message'
import Thumbs from '@icons/Thumbs'

import GuidanceArticle from './GuidanceArticle'
import PhotoCommentContainer from './PhotoCommentContainer'
import PhotoDetail from './PhotoDetail'

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

const IndexBadge = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;

  min-width: 40px;
  text-align: center;

  border-radius: 100px;
  padding: 7px 0;
  color: #fff;

  background: rgba(0, 0, 0, 0.8);

  letter-spacing: 2px;
  font-size: 0.8rem;
`

const Content = styled.div`
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

const Action = styled.div`
  margin-bottom: 7px;
  padding-right: 20px;

  button {
    color: #7f8c8d;
    padding: 4px 7px;

    margin-left: -7px;

    text-decoration: underline;
  }
`

const PHOTOS = new Array(11).fill(1)
type ThumbsState = 'up' | 'down' | 'none'
type Props = {
  gap: number
  color: string
}
function GuidancePhotoGallery(props: Props) {
  const lottieRef = useRef<LottieProps>(null)

  const [thumbs, setThumbs] = useState<ThumbsState>('none')

  const comments = useComments()

  const [isCommentBottomSheetVisible, setIsBottomSheetVisible] = useState(false)
  const [isPhotoBottomSheetVisible, setIsPhotoBottomSheetVisible] =
    useState(false)

  const handleThumbsUp = () => {
    if (thumbs === 'up') return
    setThumbs('up')
    lottieRef.current?.play()
    localStorage.setItem('thumbs', 'up')
  }

  const handleThumbsDown = () => {
    setThumbs('down')
    localStorage.setItem('thumbs', 'down')
  }

  useEffect(() => {
    console.log('ok..')
    setThumbs(localStorage.getItem('thumbs') as ThumbsState)
  }, [])

  return (
    <GuidanceArticle
      header={{
        title: 'lorem',
        description: 'Lorem ipsum dolor \n ipsum sit.',
      }}
      body={{
        title: 'lorem',
        description: 'Lorem ipsum dolor \n ipsum sit.',
      }}
      {...props}
    >
      <Content>
        <Action>
          <button onClick={() => setIsPhotoBottomSheetVisible(true)}>
            부담스러운 크기로 보기
          </button>
        </Action>
        <HorizontalScroll style={{ height: 380 }}>
          {PHOTOS.map((key, index) => (
            <ImageWrapper key={key}>
              <Image
                onClick={() => alert('ok')}
                src={`/images/gallery/${index + 1}.jpg`}
                layout="fill"
                alt="photo"
                objectFit="cover"
                priority
              />
              <IndexBadge>
                {index + 1}/{PHOTOS.length}
              </IndexBadge>
            </ImageWrapper>
          ))}
        </HorizontalScroll>
      </Content>
      <Footer>
        <Thumbs
          active={thumbs === 'up'}
          style={{ marginRight: 14 }}
          onClick={handleThumbsUp}
        />
        <Thumbs
          down
          active={thumbs === 'down'}
          style={{ marginRight: 'auto' }}
          onClick={handleThumbsDown}
        />
        <Message
          count={comments.length}
          onClick={() => setIsBottomSheetVisible(true)}
        />
      </Footer>

      <ThumbsUp ref={lottieRef} />

      {isPhotoBottomSheetVisible && (
        <BottomSheet
          onClose={() => setIsPhotoBottomSheetVisible(false)}
          noPadding
        >
          <PhotoDetail />
        </BottomSheet>
      )}

      {isCommentBottomSheetVisible && (
        <BottomSheet onClose={() => setIsBottomSheetVisible(false)}>
          <PhotoCommentContainer />
        </BottomSheet>
      )}
    </GuidanceArticle>
  )
}

export default GuidancePhotoGallery
