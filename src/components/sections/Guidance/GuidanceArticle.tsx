import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'

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

const Wrapper = styled.article<{ primary?: string }>`
  position: sticky;

  &:not(:last-of-type) {
    margin-bottom: 50px;
  }

  ${Header} {
    background: ${({ primary }) => primary};

    p {
      color: ${({ primary }) => primary};
      filter: brightness(47%);
    }
  }

  ${Body} {
    span {
      color: ${({ primary }) => primary};
    }
  }
`

type Props = {
  children: React.ReactNode
  primary?: string
  gap?: number
}
function GuidanceArticle({ children, primary, gap = 0 }: Props) {
  const [bottom, setBottom] = useState<number>(0)

  const wrapper = useRef<HTMLElement>(null)
  useEffect(() => {
    if (!wrapper.current) return

    setBottom(wrapper.current.clientHeight)
  }, [])

  return (
    <Wrapper
      primary={primary}
      ref={wrapper}
      style={{ bottom: `-${bottom - gap}px` }}
    >
      <Container>{children}</Container>
    </Wrapper>
  )
}

type HeaderProps = {
  title?: string
  description?: string
}
function GuidanceArticleHeader({ title, description }: HeaderProps) {
  return (
    <Header>
      <h3>
        <span>{title}</span>
        <br />
        <p>{description}</p>
      </h3>
    </Header>
  )
}

type BodyProps = {
  title?: string
  description?: string
  children?: React.ReactNode
}
function GuidanceArticleBody({ title, description, children }: BodyProps) {
  return (
    <Body>
      <span>{title}</span>
      <p>{description}</p>

      <BodyContent>{children}</BodyContent>
    </Body>
  )
}

GuidanceArticle.Header = GuidanceArticleHeader
GuidanceArticle.Body = GuidanceArticleBody

export default GuidanceArticle
