import { css } from '@emotion/react'
import styled from '@emotion/styled'

const EmptyBox = styled.section<{ opacity: number }>`
  position: relative;
  height: 100vh;
  ${({ opacity }) => css`
    background: rgba(0, 0, 0, ${opacity});
  `}
`
export default EmptyBox
