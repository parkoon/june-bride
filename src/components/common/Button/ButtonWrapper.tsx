import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

import Right from '@icons/Right'

import { color } from '@styles/theme'

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

const Content = styled.div`
  text-align: left;
  margin-left: 12px;
`

const Text = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
`

const Description = styled.p`
  font-size: 0.9rem;
  color: ${color.gray};
`

type Props = {
  onClick?(): void
  icon?: ReactNode
  iconColor?: string
  title?: string
  description?: string
}
function ButtonWrapper({
  icon,
  iconColor,
  onClick,
  title,
  description,
}: Props) {
  return (
    <Wrapper whileTap={{ scale: 0.95 }} onClick={onClick}>
      <Left>
        <IconWrapper style={{ backgroundColor: iconColor }}>{icon}</IconWrapper>
        <Content>
          <Text>{title}</Text>
          <Description>{description}</Description>
        </Content>
      </Left>
      <Right />
    </Wrapper>
  )
}

export default ButtonWrapper
