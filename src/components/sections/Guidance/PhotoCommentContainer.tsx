import styled from '@emotion/styled'
import React, { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'

import CommentProfileCard from '@components/common/CommentProfileCard'
import Input from '@components/common/Input'
import Textarea from '@components/common/Textarea'

import {
  Comment,
  addComment,
  deleteComment,
  useComments,
} from '@hooks/useComments'

import Send from '@icons/Send'

import PhotoCommentDeletePopup from './PhotoCommentDeletePopup'

const Wrapper = styled.div`
  height: 100%;
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;

  height: 100%;

  padding-bottom: 150px;
`
const Footer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  padding: 0 20px;

  background: #fff;

  box-shadow: 0px -4px 20px rgba(110, 108, 108, 0.75);
  height: 132px;
`

const Left = styled.div`
  margin-right: 12px;
`

const UserInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 7px;

  margin-bottom: 7px;
`
type FormValue = Pick<Comment, 'username' | 'password' | 'comment'>
const initialFormValue = {
  username: '',
  password: '',
  comment: '',
}

function PhotoCommentContainer() {
  const [formValue, setFormValue] = useState<FormValue>(initialFormValue)
  const [formError, setFormError] = useState<Record<keyof FormValue, boolean>>({
    username: false,
    password: false,
    comment: false,
  })

  const [currentComment, setCurrentComment] = useState<Comment | null>(null)

  const comments = useComments()

  const handleFormChange = (
    e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>
  ) => {
    setFormValue(
      (prev) =>
        ({ ...prev, [e.target.name]: e.target.value as string } as FormValue)
    )

    setFormError((prev) => ({ ...prev, [e.target.name]: false }))
  }

  const handleDeleteComment = async () => {
    if (!currentComment) return
    await deleteComment(currentComment.id)
    setCurrentComment(null)
    toast('잘 지워졌어요. 다시 써주실꺼죠?', { type: 'success' })
  }

  const handleSend = async () => {
    const { comment, password, username } = formValue

    let valid = true
    if (comment === '') {
      setFormError((prev) => ({ ...prev, comment: true }))
      valid = false
    }
    if (username === '') {
      setFormError((prev) => ({ ...prev, username: true }))
      valid = false
    }
    if (password === '') {
      setFormError((prev) => ({ ...prev, password: true }))
      valid = false
    }

    if (valid) {
      try {
        await addComment({ username, comment, password })
        setFormValue(initialFormValue)
        toast('덕담 감사합니다. 행복하게 잘 살게요!', { type: 'success' })
      } catch (err) {}
    }
  }

  return (
    <Wrapper>
      <Body>
        {comments.map((comment) => (
          <CommentProfileCard
            key={comment.id}
            {...comment}
            onDeleteClick={() => setCurrentComment(comment)}
          />
        ))}
      </Body>

      <Footer>
        <Left>
          <UserInfo>
            <Input
              name="username"
              placeholder="이름이?"
              onChange={handleFormChange}
              value={formValue.username}
              error={formError.username}
            />
            <Input
              name="password"
              placeholder="비밀번호는?"
              onChange={handleFormChange}
              value={formValue.password}
              error={formError.password}
            />
          </UserInfo>
          <Textarea
            name="comment"
            placeholder="신랑 신부에게 덕담 한마디 해주세요."
            onChange={handleFormChange}
            value={formValue.comment}
            error={formError.comment}
            rows={3}
          />
        </Left>
        <Send onClick={handleSend} />
      </Footer>

      <PhotoCommentDeletePopup
        visible={Boolean(currentComment)}
        registeredPassword={currentComment?.password}
        onCancel={() => setCurrentComment(null)}
        onOk={handleDeleteComment}
      />
    </Wrapper>
  )
}

export default PhotoCommentContainer
