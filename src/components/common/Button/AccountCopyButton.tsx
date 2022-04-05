import copy from 'copy-to-clipboard'
import React from 'react'
import { toast } from 'react-toastify'

import Card from '@icons/Card'

import ButtonWrapper from './ButtonWrapper'

type Props = { description?: string }
function AccountCopyButton({ description }: Props) {
  const handleClick = () => {
    if (description) {
      copy(description)
      toast('계좌번호를 복사했습니다.', { type: 'success' })
    }
  }
  return (
    <ButtonWrapper
      icon={<Card />}
      iconColor="#f1c40f"
      title="계좌번호 복사하기"
      description={description}
      onClick={handleClick}
    />
  )
}

export default AccountCopyButton
