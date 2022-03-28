import React from 'react'

import Card from '@icons/Card'
import Chat from '@icons/Chat'

import ButtonWrapper from './ButtonWrapper'

function MessageButton() {
  return (
    <ButtonWrapper icon={<Chat />} iconColor="#bdc3c7">
      문자보내기
    </ButtonWrapper>
  )
}

export default MessageButton
