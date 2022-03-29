import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'

import AccountCopyButton from '@components/Button/AccountCopyButton'
import CallButton from '@components/Button/CallButton'
import MessageButton from '@components/Button/MessageButton'
import SlidingTab from '@components/common/SlidingTab'

import GuidanceArticle from './GuidanceArticle'

const TabWrapper = styled.div`
  position: absolute;

  left: 12px;
  top: 12px;
`

const ImageWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 50vh;
`
const UserInfo = styled.div`
  padding: 20px 12px;
`
const UserName = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 1px;
`
const Job = styled.span`
  color: #7f8c8d;
  font-size: 1.1rem;
`
const Status = styled.span``

const Actions = styled.div`
  margin-top: 24px;
`

const ActionTitle = styled.span`
  color: #7f8c8d;
  font-size: 0.9rem;
  padding: 12px;
`
function GuidanceProfile() {
  return (
    <GuidanceArticle
      color="#20bf6b"
      gap={25 * 3}
      header={{
        title: 'lorem',
        description: 'Lorem ipsum dolor \n ipsum sit.',
      }}
    >
      <ImageWrapper>
        <Image
          onClick={() => alert('ok')}
          src={`/images/gallery/1.jpg`}
          layout="fill"
          alt="photo"
          objectFit="cover"
        />

        <TabWrapper>
          <SlidingTab items={['신랑', '신부']} />
        </TabWrapper>
      </ImageWrapper>

      {/* <UserInfo>
        <UserName>박 종혁</UserName>
        <Job>Frontend Engineer</Job>
      </UserInfo> */}
      <Actions>
        <ActionTitle>신랑에게 연락하기</ActionTitle>
        <MessageButton />
        <CallButton />
        <AccountCopyButton />
      </Actions>
    </GuidanceArticle>
  )
}

export default GuidanceProfile
