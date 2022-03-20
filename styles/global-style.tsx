import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'

const defaultStyle = css`
  ${emotionReset}

  html {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
  }

  body {
    overflow-x: hidden;
    color: rgb(29, 29, 31);
    letter-spacing: -0.05em;
  }
  a {
    color: rgb(29, 29, 31);
    text-decoration: none;
  }
`

function GlobalStyle() {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
