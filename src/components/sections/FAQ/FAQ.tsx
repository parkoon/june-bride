import styled from '@emotion/styled'

import Accordion from '@components/common/Accordion'

import { ITEMS } from './constants'

const Wrapper = styled.section`
  background: #fff;
  padding: 72px 20px 40px 20px;
  h3 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    line-height: 1.2;

    margin-bottom: 24px;
  }
`
function FAQ() {
  return (
    <Wrapper>
      <h3>
        더욱 알기 쉬운
        <br /> 요약정리.
      </h3>
      {ITEMS.map((item, index) => (
        <Accordion key={index} {...item} />
      ))}
    </Wrapper>
  )
}

export default FAQ
