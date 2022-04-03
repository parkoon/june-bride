import React from 'react'

import Chat from '@icons/Chat'

import ButtonWrapper from './ButtonWrapper'

type Props = { description?: string }
function MessageButton({ description }: Props) {
  return (
    <ButtonWrapper
      icon={<Chat />}
      iconColor="#bdc3c7"
      title="문자보내기"
      description={description}
      onClick={() => (window.location.href = `sms:${description}`)}
    />
  )
}

export default MessageButton
