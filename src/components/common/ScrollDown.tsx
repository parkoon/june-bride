import styled from '@emotion/styled'

import { ONLY_PC_SECTION_WIDTH } from '@components/sections/OnlyPC/OnlyPC'

import { breakpoint } from '@styles/theme'

const Wrapper = styled.div`
  position: fixed;
  bottom: 12px;
  left: 50%;

  transform: translateX(-50%);

  @media (min-width: ${breakpoint}px) {
    margin-left: ${ONLY_PC_SECTION_WIDTH / 2}px;
  }
`

const Line = styled.div`
  display: block;
  position: relative;
  padding-top: 39px;
  text-align: center;

  &::after {
    animation: elasticus 1.2s cubic-bezier(1, 0, 0, 1) infinite;

    position: absolute;
    top: 0px;
    left: 50%;
    margin-left: -1px;
    width: 2px;
    height: 50px;
    background: #333;
    content: ' ';
  }

  @keyframes elasticus {
    0% {
      transform-origin: 0% 0%;
      transform: scale(1, 0);
    }
    50% {
      transform-origin: 0% 0%;
      transform: scale(1, 1);
    }
    50.1% {
      transform-origin: 0% 100%;
      transform: scale(1, 1);
    }
    100% {
      transform-origin: 0% 100%;
      transform: scale(1, 0);
    }
  }
`
const Arrow = styled.span`
  display: block;
  margin: 0 auto;
  width: 10px;
  height: 25px;

  &::after {
    content: '';
    display: block;
    margin: 0;
    padding: 0;
    width: 8px;
    height: 8px;
    border-top: 2px solid #333;
    border-right: 2px solid #333;
    transform: rotate(135deg);
  }
`
const Title = styled.span`
  display: block;
  text-transform: uppercase;
  color: #333;
  font-size: 14px;
  font-weight: bold;
`

type Props = {
  opacity?: number
}
function ScrollDown({ opacity }: Props) {
  return (
    <Wrapper style={{ opacity }}>
      <Line>
        <Arrow />
        <Title>Scroll down</Title>
      </Line>
    </Wrapper>
  )
}

export default ScrollDown
