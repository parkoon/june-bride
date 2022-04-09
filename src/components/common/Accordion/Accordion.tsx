import styled from '@emotion/styled'
import { ReactNode, useState } from 'react'

import { color } from '@styles/theme'

import AccordionArrowIcon from './AccordionArrowIcon'
import { useHeight } from './hooks'

const Wrapper = styled.button`
  display: block;
  width: 100%;

  text-align: left;
  background-color: transparent;
  padding: 20px 0;

  border-bottom: 1px solid rgb(210, 210, 215);
`

const Header = styled.div`
  position: relative;
  h2 {
    font-size: 1rem;
    margin-bottom: 7px;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.3;
  }

  cursor: pointer;
`
const Body = styled.div`
  overflow: hidden;

  transition: 0.4s ease;
  > p,
  > div {
    color: ${color.gray};
    line-height: 1.3;
    padding-top: 16px;
  }
`
const IconWrapper = styled.span<{ open: boolean }>`
  position: absolute;

  top: 0px;
  right: 0px;
  width: 18px;
  height: 18px;

  position: absolute;
  transition: transform 0.3s ease;
  pointer-events: none;
  transform: ${({ open }) => `rotate(${open ? 180 : 0}deg)`};
`

type AccordionProps = {
  category: { text: string; color: string }
  title?: string
  content?: string | ReactNode
}
function Accordion({ category, title, content }: AccordionProps) {
  const [open, setOpen] = useState(false)
  const { height, ref } = useHeight<HTMLParagraphElement | HTMLDivElement>()

  return (
    <Wrapper>
      <Header role="button" onClick={() => setOpen((prev) => !prev)}>
        <h2 style={{ color: category.color }}>{category.text}</h2>
        <p>{title}</p>
        <IconWrapper open={open}>
          <AccordionArrowIcon />
        </IconWrapper>
      </Header>
      <Body
        style={
          open
            ? {
                height,
                opacity: 1,
              }
            : {
                height: 0,
                opacity: 0,
              }
        }
      >
        {typeof content === 'string' ? (
          <p ref={ref}>{content}</p>
        ) : (
          <div ref={ref}>{content}</div>
        )}
      </Body>
    </Wrapper>
  )
}

export default Accordion
