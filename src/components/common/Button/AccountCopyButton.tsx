import React from 'react'

import Card from '@icons/Card'

import ButtonWrapper from './ButtonWrapper'

type Props = { description?: string }
function AccountCopyButton({ description }: Props) {
  return (
    <ButtonWrapper
      icon={<Card />}
      iconColor="#f1c40f"
      title="계좌번호 복사하기"
      description={description}
    />
  )
}

export default AccountCopyButton
