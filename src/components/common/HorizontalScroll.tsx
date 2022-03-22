import styled from '@emotion/styled'

const HorizontalScroll = styled.div`
  display: grid;
  grid-auto-flow: column;

  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;

  height: 100%;

  gap: 12px;

  > * {
    scroll-snap-align: center;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`

export default HorizontalScroll
