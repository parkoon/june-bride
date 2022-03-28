import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { ReactNode } from 'react'

import Card from '@icons/Card'
import Right from '@icons/Right'

const Wrapper = styled(motion.button)`
  width: 100%;

  padding: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const IconWrapper = styled.div`
  padding: 10px;
  border-radius: 50%;
`

const Left = styled.div`
  display: flex;
  align-items: center;
`

const Text = styled.div`
  margin-left: 12px;
  font-weight: bold;
  font-size: 1.1rem;
`

type Props = {
  children?: ReactNode
  onClick?(): void
  icon?: ReactNode
  iconColor?: string
}
function ButtonWrapper({ icon, iconColor, onClick, children }: Props) {
  return (
    <Wrapper
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      <Left>
        <IconWrapper style={{ backgroundColor: iconColor }}>{icon}</IconWrapper>

        <Text>{children}</Text>
      </Left>
      <Right />
    </Wrapper>
  )
}

export default ButtonWrapper
