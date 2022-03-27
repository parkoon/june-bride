import styled from '@emotion/styled'
import React, { ChangeEvent, useState } from 'react'

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
  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState(false)
  const [comment, setComment] = useState('')
  const [commentError, setCommentError] = useState(false)

  const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
    setUsernameError(false)
  }

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value)
    setCommentError(false)
  }

  const handleSend = () => {
    console.log('comment', comment)

    let valid = true
    if (comment === '') {
      setCommentError(true)
      valid = false
    }
    if (username === '') {
      setUsernameError(true)
      valid = false
    }

    if (valid) {
      alert(JSON.stringify({ username, comment }))
    }
  }
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
        <Input
          placeholder="이름에 뭐에요?"
          style={{ width: 110 }}
          value={username}
          onChange={handleUserNameChange}
          error={usernameError}
        />
        <Input
          placeholder="신랑 신부에게 덕담 한마디!"
          style={{ marginRight: 8 }}
          value={comment}
          onChange={handleCommentChange}
          error={commentError}
        />
        <Send onClick={handleSend} />
      </Footer>
    </Wrapper>
  )
}

export default PhotoCommentContainer
