import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'

import { useChangeColorInView } from './hooks'

const Container = styled.div`
  max-width: 329px;
  width: 96%;
  margin: 0 auto;
`

const Header = styled.header`
  border-radius: 24px;

  display: flex;
  align-items: center;

  min-height: 27vh;

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
  min-height: 63vh;

  padding: 40px 20px;

  background: #fff;
  border-radius: 24px;

  font-size: 2rem;
  font-weight: bold;
  line-height: 1.25;
`

const BodyContent = styled.div`
  margin-top: 40px;
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

  ${Body} {
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
  body: {
    title: string
    description: string
  }
  color?: string
  gap?: number
}
function GuidanceArticle({ children, header, body, color, gap = 0 }: Props) {
  const [bottom, setBottom] = useState<number>(0)

  const colorTrigger = useChangeColorInView({
    rootMargin: '0% 0% -20% 0%',
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

        <Body>
          <span>{body.title}</span>
          <p>{body.description}</p>

          <BodyContent>{children}</BodyContent>
        </Body>
      </Container>
    </Wrapper>
  )
}

export default GuidanceArticle
