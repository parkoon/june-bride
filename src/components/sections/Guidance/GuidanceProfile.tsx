import styled from '@emotion/styled'
import Image from 'next/image'
import React, { useState } from 'react'

import BridgeGroomTab from '@components/common/BridgeGroomTab'
import AccountCopyButton from '@components/common/Button/AccountCopyButton'
import CallButton from '@components/common/Button/CallButton'
import MessageButton from '@components/common/Button/MessageButton'

import { color } from '@styles/theme'

import GuidanceArticle from './GuidanceArticle'

const TabWrapper = styled.div`
  position: absolute;

  top: 7px;
  right: 7px;
`
const ImageWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 320px;
`
const Actions = styled.div`
  margin-top: 24px;
`
const ActionTitle = styled.span`
  color: ${color.gray};
  font-size: 0.9rem;
  padding: 12px;
`
type Props = {
  gap: number
  color: string
}

export const profile = {
  groom: {
    title: '신랑',
    phone: '010-3328-0917',
    bank: '신한은행 110-265-285-679',
    image: '/images/gallery/10.jpg',
  },
  bride: {
    title: '신부',
    phone: '010-4321-9302',
    bank: '우리은행 1002-2458-658687',
    image: '/images/gallery/3.jpg',
  },
}

function GuidanceProfile(props: Props) {
  const [currentProfile, setCurrentProfile] =
    useState<keyof typeof profile>('groom')

  const handleTabChange = (value: number) => {
    setCurrentProfile(value === 0 ? 'groom' : 'bride')
  }

  const { bank, image, phone, title } = profile[currentProfile]
  return (
    <GuidanceArticle
      header={{
        title: '연락',
        description: '멀리서 마음을 \n 표현하는 방법.',
      }}
      {...props}
    >
      <ImageWrapper>
        <Image src={image} layout="fill" alt="photo" objectFit="cover" />
        <TabWrapper>
          <BridgeGroomTab onChange={handleTabChange} />
        </TabWrapper>
      </ImageWrapper>

      <Actions>
        <ActionTitle>{title}에게 연락하기</ActionTitle>
        <MessageButton description={phone} />
        <CallButton description={phone} />
        <AccountCopyButton description={bank} />
      </Actions>
    </GuidanceArticle>
  )
}

export default GuidanceProfile
