import React from 'react'

import Call from '@icons/Call'

import ButtonWrapper from './ButtonWrapper'

function CallButton() {
  return (
    <ButtonWrapper icon={<Call />} iconColor="#27ae60">
      전화하기
    </ButtonWrapper>
  )
}

export default CallButton
