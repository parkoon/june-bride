import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'

const defaultStyle = css`
  ${emotionReset}
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-size: 14px;
  }
  html,
  body {
    height: 100%;
  }

  body {
    overflow-x: hidden;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`

function GlobalStyle() {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
