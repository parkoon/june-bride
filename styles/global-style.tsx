import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'

const defaultStyle = css`
  ${emotionReset}

  * {
    box-sizing: border-box;
  }
  html {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
  }

  body {
    overflow-x: hidden;
    color: rgb(29, 29, 31);
    letter-spacing: -0.05em;
    background: #f5f1e7;
  }
  a {
    color: rgb(29, 29, 31);
    text-decoration: none;
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
    padding: 0;
  }

  /* 모바일 환경에서 생기는 하이라이트 제거 (https://stackoverflow.com/questions/45049873/how-to-remove-the-blue-highlight-of-button-on-mobile) */
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .slick-track {
    display: flex;
    align-items: center;
  }
`

function GlobalStyle() {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
