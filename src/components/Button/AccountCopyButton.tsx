import React from 'react'

import Card from '@icons/Card'

import ButtonWrapper from './ButtonWrapper'

function AccountCopyButton() {
  return (
    <ButtonWrapper icon={<Card />} iconColor="#f1c40f">
      계좌번호 복사하기
    </ButtonWrapper>
  )
}

export default AccountCopyButton
