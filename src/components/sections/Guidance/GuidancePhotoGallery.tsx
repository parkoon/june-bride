import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

import BottomSheet from '@components/common/BottomSheet'
import HorizontalScroll from '@components/common/HorizontalScroll'
import ThumbsUp from '@components/common/Lotties/ThumbsUp'
import { LottieProps } from '@components/common/Lotties/types'
import MotionButton from '@components/common/MotionButton'

import { useComments } from '@hooks/useComments'

import Message from '@icons/Message'
import Thumbs from '@icons/Thumbs'
import Zoom from '@icons/Zoom'

import { color, figure } from '@styles/theme'

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
`

const ZoomButton = styled(MotionButton)`
  display: flex;
  padding: 4px 7px;

  align-items: center;

  > svg {
    margin-right: 2px;
  }
  color: ${color.gray};
  border: 1px solid ${color.gray};
  border-radius: ${figure.borderRadius}px;
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
    setThumbs(localStorage.getItem('thumbs') as ThumbsState)
  }, [])

  return (
    <GuidanceArticle
      header={{
        title: '사진첩',
        description: '겨울에 야외촬영 \n 실화?',
      }}
      body={{
        title: '포토샵',
        description: '우리를 다른 사람으로 만든 \n 놀라운 기술.',
      }}
      {...props}
    >
      <Content>
        <Action>
          <ZoomButton
            onClick={() => setIsPhotoBottomSheetVisible(true)}
            style={{ fontSize: 10 }}
          >
            <Zoom />
            부담스러운 크기로 보기
          </ZoomButton>
        </Action>
        <HorizontalScroll style={{ height: 380 }}>
          {PHOTOS.map((key, index) => (
            <ImageWrapper key={key}>
              <Image
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
