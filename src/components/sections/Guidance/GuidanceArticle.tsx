import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'

import FadeInOut from '@components/common/FadeInOut'

import { useChangeColorInView } from './hooks'

const Container = styled.div`
  /* max-width: 329px; */
  width: 90%;
  margin: 0 auto;
`

const Header = styled.header`
  /* TODO. border radius 가 이상함... */
  border-radius: 48px;

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
const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #fff;
  border-radius: 24px;

  overflow: hidden;
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

  &:not(:last-of-type) {
    margin-bottom: 50px;
  }

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
  color?: string
  gap?: number
}

const FADE_IN_OUT_ROOT_MARGIN = '0% 0% -10% 0%'
const COLOR_ROOT_MARGIN = '0% 0% -20% 0%'

function GuidanceArticle({ children, header, body, color, gap = 0 }: Props) {
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
          <FadeInOut options={{ rootMargin: FADE_IN_OUT_ROOT_MARGIN }}>
            <h3>
              <span>{header.title}</span>
              <br />
              <p>{header.description}</p>
            </h3>
          </FadeInOut>
        </Header>

        <Body>
          {body && (
            <FadeInOut options={{ rootMargin: FADE_IN_OUT_ROOT_MARGIN }}>
              <BodyHeader>
                <span>{body.title}</span>
                <p>{body.description}</p>
              </BodyHeader>
            </FadeInOut>
          )}

          <BodyContent>{children}</BodyContent>
        </Body>
      </Container>
    </Wrapper>
  )
}

export default GuidanceArticle
