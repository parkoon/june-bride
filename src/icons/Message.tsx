import styled from '@emotion/styled'
import React from 'react'

const Wrapper = styled.button`
  display: flex;
  align-items: center;
`
const Count = styled.span`
  color: #51565f;
  font-weight: lighter;
  font-size: 1.2rem;

  margin-right: 12px;
`

type Props = {
  count?: number
  onClick?(): void
}
function Message({ count, onClick }: Props) {
  return (
    <Wrapper onClick={onClick}>
      <Count>{count}</Count>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 8H13M7 12H17H7Z"
          stroke="#51565F"
          strokeWidth="0.5"
          strokeLinecap="round"
          stroke-Linejoin="round"
        />
        <path
          d="M3 20.29V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7.961C7.66123 17 7.36531 17.0675 7.09511 17.1973C6.82491 17.3271 6.58735 17.516 6.4 17.75L4.069 20.664C3.99143 20.7612 3.88556 20.8319 3.76604 20.8664C3.64652 20.9008 3.51926 20.8972 3.40186 20.8561C3.28446 20.815 3.18273 20.7385 3.11073 20.6371C3.03874 20.5357 3.00005 20.4144 3 20.29V20.29Z"
          stroke="#51565F"
          strokeWidth="0.5"
        />
      </svg>
    </Wrapper>
  )
}

export default Message
