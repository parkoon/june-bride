import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'

import { figure } from '@styles/theme'

import { useChangeColorInView } from './hooks'

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`

const Header = styled.header`
  border-radius: ${figure.borderRadius}px;

  display: flex;
  align-items: center;

  padding: 40px 20px;

  margin-bottom: 15px;
  padding-left: 20px;

  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.25;

  h3 {
    color: #fff;
  }

  p {
    white-space: pre-line;
  }
`
const Body = styled.div<{ background?: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #fff;
  border-radius: ${figure.borderRadius}px;

  overflow: hidden;

  p {
    white-space: pre-line;
  }

  ${({ background }) =>
    background &&
    css`
      background-image: url(${background});
      background-repeat: no-repeat;
      background-size: cover;
    `}
`

const BodyHeader = styled.div`
  padding: 40px 20px;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.25;
`

const BodyContent = styled.div`
  flex: 1;
`

const Wrapper = styled.article<{ color?: string }>`
  position: sticky;
  padding-bottom: 50px;

  ${Header} {
    background: ${({ color }) => color};

    p {
      color: ${({ color }) => color};
      filter: brightness(47%);
    }
  }

  ${BodyHeader} {
    span {
      color: ${({ color }) => color};
    }
  }
`

const COLOR_ROOT_MARGIN = '0% 0% -35% 0%'

type Props = {
  children: React.ReactNode
  header: {
    title: string
    description: string
  }
  body?: {
    title: string
    description: string
  }
  background?: string
  color?: string
  gap?: number
}
function GuidanceArticle({
  children,
  header,
  body,
  background,
  color,
  gap = 0,
}: Props) {
  const [bottom, setBottom] = useState<number>(0)

  const colorTrigger = useChangeColorInView({
    rootMargin: COLOR_ROOT_MARGIN,
    threshold: 1,
    color,
  })

  const wrapper = useRef<HTMLElement>(null)
  useEffect(() => {
    if (!wrapper.current) return

    setBottom(wrapper.current.clientHeight)
  }, [])

  return (
    <Wrapper
      color={color}
      ref={wrapper}
      style={{ bottom: `-${bottom - gap}px` }}
    >
      <Container>
        <Header ref={colorTrigger}>
          <h3>
            <span>{header.title}</span>
            <br />
            <p>{header.description}</p>
          </h3>
        </Header>

        <Body background={background}>
          {body && (
            <BodyHeader>
              <span>{body.title}</span>
              <p>{body.description}</p>
            </BodyHeader>
          )}

          <BodyContent>{children}</BodyContent>
        </Body>
      </Container>
    </Wrapper>
  )
}

export default GuidanceArticle
