import styled from '@emotion/styled'
import React from 'react'

import CommentProfileCard from '@components/common/CommentProfileCard'
import Input from '@components/common/Input'

import Send from '@icons/Send'

const Wrapper = styled.div`
  height: 100%;
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;

  height: 100%;

  padding-bottom: 82px;
`
const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  padding: 0 20px;
  height: 70px;

  background: #fff;
`

function PhotoCommentContainer() {
  return (
    <Wrapper>
      <Body>
        {new Array(20).fill(0).map((_, index) => (
          <CommentProfileCard
            key={index}
            username="박종혁"
            commentAt={Date.now()}
            comment={
              '행복하게사세요\n행복하게사세요\n행복하게사세요\n행복하게사세요'
            }
          />
        ))}
      </Body>

      <Footer>
        <Input placeholder="이름" style={{ width: 84 }} />
        <Input placeholder="할말" style={{ marginRight: 8 }} />
        <Send />
      </Footer>
    </Wrapper>
  )
}

export default PhotoCommentContainer
