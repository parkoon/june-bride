import styled from '@emotion/styled'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import relativeTime from 'dayjs/plugin/relativeTime'
import { motion } from 'framer-motion'
import React from 'react'

import Delete from '@icons/Delete'

import { figure } from '@styles/theme'

dayjs.extend(relativeTime)
dayjs.locale('ko')

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 35px;

  grid-gap: 12px;

  padding: 20px 15px;

  background-color: #ebebeb;

  border-radius: ${figure.borderRadius}px;
`

const Header = styled.div`
  margin-bottom: 7px;

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
  line-height: 1.1rem;
`

const CommentAt = styled.span`
  font-size: 0.9rem;
  margin-left: 7px;
  color: #636e72;
  font-weight: normal;
`

const DeleteButton = styled(motion.button)`
  width: 35px;
  height: 35px;
`

type Props = {
  username: string
  comment: string
  createdAt: number
  onDeleteClick?(): void
}
function CommentProfileCard({
  username,
  comment,
  createdAt,
  onDeleteClick,
}: Props) {
  return (
    <Wrapper>
      <div>
        <Header>
          <UserName>{username}</UserName>
          <CommentAt>{dayjs(createdAt).fromNow()}</CommentAt>
        </Header>
        <Comment>{comment}</Comment>
      </div>
      <DeleteButton whileTap={{ scale: 0.9 }} onClick={onDeleteClick}>
        <Delete />
      </DeleteButton>
    </Wrapper>
  )
}

export default CommentProfileCard
