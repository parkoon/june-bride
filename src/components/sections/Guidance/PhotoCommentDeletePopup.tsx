import styled from '@emotion/styled'
import React, { ChangeEvent, useState } from 'react'

import Input from '@components/common/Input'
import Popup from '@components/common/Popup'

import { color } from '@styles/theme'

const Description = styled.p`
  color: ${color.gray};

  line-height: 1.2rem;
  margin-bottom: 7px;
`

const ErrorMessage = styled.p`
  margin-top: 7px;
  font-size: 0.9rem;
  color: #e67e22;
`

type Props = { registeredPassword?: string } & Omit<
  React.ComponentProps<typeof Popup>,
  'children'
>
function PhotoCommentDeletePopup({
  registeredPassword,
  onOk,
  onCancel,
  ...props
}: Props) {
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    setPasswordError(false)
  }

  const handleCancel = () => {
    setPassword('')
    setPasswordError(false)
    setErrorMessage('')
    onCancel?.()
  }

  const handleOk = () => {
    if (password === '') {
      setPasswordError(true)
      return
    }

    if (registeredPassword !== password) {
      setPasswordError(true)
      setErrorMessage('비밀번호가 일치하지 않습니다.')
      return
    }

    onOk?.()
  }

  return (
    <Popup
      title="코멘트를 삭제하시겠어요?"
      onOk={handleOk}
      onCancel={handleCancel}
      {...props}
    >
      <Description>
        잘못입력해서 삭제하시는거라 믿습니다. <br /> 아래에 비밀번호를
        입력해주세요.
      </Description>
      <Input
        placeholder="비밀번호는?"
        value={password}
        onChange={handlePasswordChange}
        error={passwordError}
      />
      {errorMessage && (
        <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
      )}
    </Popup>
  )
}

export default PhotoCommentDeletePopup
