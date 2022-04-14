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

const Actions = styled.div`
  margin-top: 24px;
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
    image: '/images/groom.png',
  },
  bride: {
    title: '신부',
    phone: '010-4321-9302',
    bank: '하나은행 218-890200-74107 (혼주 김준기)',
    image: '/images/bride.png',
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
      background={image}
      {...props}
    >
      <div style={{ height: 320 }}></div>

      <Actions>
        <MessageButton description={phone} />
        <CallButton description={phone} />
        <AccountCopyButton description={bank} />
      </Actions>

      <TabWrapper>
        <BridgeGroomTab onChange={handleTabChange} />
      </TabWrapper>
    </GuidanceArticle>
  )
}

export default GuidanceProfile
