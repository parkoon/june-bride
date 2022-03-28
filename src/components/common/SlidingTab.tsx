import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useCallback, useEffect, useRef, useState } from 'react'

const Wrapper = styled.div`
  position: relative;

  display: inline-flex;

  background: rgba(0, 0, 0, 0.2);

  border-radius: 12px;

  padding: 4px;
`

const Item = styled.button<{ selected?: boolean }>`
  position: relative;
  min-width: 75px;
  padding: 12px;

  ${({ selected }) =>
    selected &&
    css`
      transition-delay: 0.2s;
      color: #fff;
    `}
`

const Cover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  left: 0;
  border-radius: 12px;

  background: #111;

  height: 100%;

  transition: 0.2s ease-in;
`

type Props = {
  items: string[]
  initialIndex?: number
  onChange?(index: number): void
}

function SlidingTab({ items, initialIndex = 0, onChange }: Props) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(initialIndex)
  const [coverStyle, setCoverStyle] = useState({ left: 0, width: 0, height: 0 })

  const itemRefs = useRef<HTMLButtonElement[]>([])

  const getCoverStyle = (index: number) => {
    const { offsetLeft: left } = itemRefs.current[index]
    const { width, height } = itemRefs.current[index].getBoundingClientRect()

    return {
      left,
      width,
      height,
    }
  }

  const handleItemClick = (index: number) => () => {
    setSelectedItemIndex(index)
    setCoverStyle(getCoverStyle(index))
    onChange?.(index)
  }

  const initTabItem = useCallback(() => {
    setCoverStyle(getCoverStyle(initialIndex))
  }, [initialIndex])

  useEffect(() => {
    initTabItem()
  }, [initTabItem])

  return (
    <Wrapper>
      <Cover style={coverStyle} />
      {items.map((item, index) => (
        <Item
          key={index}
          selected={selectedItemIndex === index}
          onClick={handleItemClick(index)}
          ref={(ref) => (itemRefs.current[index] = ref!)}
        >
          {item}
        </Item>
      ))}
    </Wrapper>
  )
}

export default SlidingTab
