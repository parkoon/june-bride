import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import React from 'react'

import { figure } from '@styles/theme'

import MotionButton from './MotionButton'

const Dim = styled.div<{ visible?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  transition: 0.3s;
`
const Wrapper = styled.div<{ visible?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.3s;
  transform: ${(props) => (props.visible ? 'scale(1)' : 'scale(0)')};
`

const Header = styled.div`
  margin-bottom: 24px;
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
  }
`

const Content = styled.div`
  position: relative;
  padding: 20px;
  width: 80%;
  background: #fff;
  border-radius: ${figure.borderRadius}px;
`

const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-gap: 7px;

  margin-top: 18px;
`

const Button = styled(MotionButton)`
  width: 100%;
  padding: 12px;
  border-radius: ${figure.borderRadius}px;
`

const Ok = styled(Button)`
  background: #333;
  color: #fff;
`
const Cancel = styled(Button)`
  border: 1px solid #333;
  color: #333;
`

type Props = {
  onCancel?(): void
  onOk?(): void
  children: React.ReactNode
  visible?: boolean
  title?: string
}

function Popup({ title, visible, children, onCancel, onOk }: Props) {
  return (
    <>
      {visible && <Dim />}
      <Wrapper visible={visible}>
        <Content>
          <Header>
            <h3>{title}</h3>
          </Header>
          {children}
          <Footer>
            <Cancel onClick={onCancel}>안할래요</Cancel>
            <Ok onClick={onOk}>할래요</Ok>
          </Footer>
        </Content>
      </Wrapper>
    </>
  )
}

export default Popup
