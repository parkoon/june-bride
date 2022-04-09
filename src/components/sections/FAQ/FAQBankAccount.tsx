import styled from '@emotion/styled'
import copy from 'copy-to-clipboard'
import { motion } from 'framer-motion'
import React from 'react'
import { toast } from 'react-toastify'

import MotionButton from '@components/common/MotionButton'

import { color, figure } from '@styles/theme'

import { profile } from '../Guidance/GuidanceProfile'

const Wrapper = styled.div``
const Button = styled(MotionButton)`
  color: ${color.gray};
  border: 1px solid ${color.gray};
  min-width: 170px;
  padding: 4px 12px;
  border-radius: ${figure.borderRadius}px;
`
const Name = styled.span`
  display: block;
  margin-bottom: 4px;
`

function FAQBankAccount() {
  const copyBankAccount = (account: string) => {
    copy(account)
    toast('계좌번호를 복사했습니다.', { type: 'success' })
  }
  return (
    <Wrapper>
      <Name>신랑 박종혁</Name>
      <Button onClick={() => copyBankAccount(profile.groom.bank)}>
        {profile.groom.bank}
      </Button>
      <Name style={{ marginTop: 7 }}>신부 김진아</Name>
      <Button onClick={() => copyBankAccount(profile.bride.bank)}>
        {profile.bride.bank}
      </Button>
    </Wrapper>
  )
}

export default FAQBankAccount
