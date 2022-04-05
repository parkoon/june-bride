import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'

import { breakpoint } from '@styles/theme'

export const ONLY_PC_SECTION_WIDTH = 340

const Wrapper = styled.section`
  display: none;

  width: ${ONLY_PC_SECTION_WIDTH}px;
  align-self: flex-start;

  color: #333;
  padding-right: 32px;

  margin-top: 120px;

  position: sticky;

  top: 120px;

  @media (min-width: ${breakpoint}px) {
    display: inline-block;
  }
`

const Header = styled.header`
  font-weight: bold;
  text-align: right;
  h2:nth-child(1) {
    font-size: 3rem;
    margin-bottom: 5px;
  }
  h2:nth-child(2) {
    font-size: 2rem;
  }
`

const Footer = styled.footer`
  padding: 12px;

  color: #fff;
  background: #333;

  display: flex;
  justify-content: center;
  align-items: center;

  b {
    font-size: 1.5rem;
    margin-left: 7px;
  }

  transform: translateY(-30px);
`

function OnlyPC() {
  return (
    <Wrapper>
      <Header>
        <h2>열심히 일해 돈벌어</h2>
        <h2>강남 살겠습니다!</h2>
      </Header>
      <Image src="/images/wedding.png" alt="wedding" width={200} height={200} />
      <Footer>
        <p>2022년 6월 18일 12시 30분</p>
        <b>강동루벨</b>
      </Footer>
    </Wrapper>
  )
}

export default OnlyPC
