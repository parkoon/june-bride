import React from 'react'

import Call from '@icons/Call'

import ButtonWrapper from './ButtonWrapper'

type Props = { description?: string }
function CallButton({ description }: Props) {
  return (
    <ButtonWrapper
      icon={<Call />}
      iconColor="#27ae60"
      title="전화하기"
      description={description}
    />
  )
}

export default CallButton
