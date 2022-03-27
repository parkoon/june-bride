import styled from '@emotion/styled'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import relativeTime from 'dayjs/plugin/relativeTime'
import React from 'react'

dayjs.extend(relativeTime)
dayjs.locale('ko')

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 35px 1fr;

  grid-gap: 12px;

  padding: 20px 15px;
  font-size: 1.2rem;

  background-color: #ebebeb;

  border-radius: 24px;
`
const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 35px;
  height: 35px;

  border-radius: 50%;
  background: orange;

  color: #fff;
`

const Header = styled.div`
  margin-bottom: 4px;

  display: flex;
  align-items: center;
`
const UserName = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
`
const Comment = styled.p`
  font-weight: normal;

  white-space: pre-line;
`

const CommentAt = styled.span`
  font-size: 0.9rem;
  margin-left: 7px;
  color: #636e72;
  font-weight: normal;
`

type Props = {
  username: string
  comment: string
  commentAt: number
}
function CommentProfileCard({ username, comment, commentAt }: Props) {
  return (
    <Wrapper>
      <Avatar>
        <span>{username.charAt(0)}</span>
      </Avatar>
      <div>
        <Header>
          <UserName>{username}</UserName>
          <CommentAt>{dayjs(commentAt).fromNow()}</CommentAt>
        </Header>
        <Comment>{comment}</Comment>
      </div>
    </Wrapper>
  )
}

export default CommentProfileCard
