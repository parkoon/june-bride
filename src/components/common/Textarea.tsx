import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { figure } from '@styles/theme'

const Textarea = styled.textarea<{ error?: boolean }>`
  border: none;
  outline: none;
  resize: none;
  width: 100%;
  border-radius: ${figure.borderRadius}px;
  background-color: #ebebeb;
  padding: 12px 15px;
  color: #636e72;
  caret-color: #636e72;

  ${({ error }) =>
    error &&
    css`
      border: 1px solid #e67e22;
      ::placeholder {
        color: #e67e22;
      }
    `}
`

export default Textarea
