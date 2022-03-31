import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useEffect, useRef, useState } from 'react'

import Bride from '@icons/Bride'
import Groom from '@icons/Groom'

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
  padding: 4px 12px;

  svg {
    width: 30px;
    height: 30px;
  }

  ${({ selected }) =>
    selected &&
    css`
      transition-delay: 0.2s;
      color: #fff;

      svg {
        fill: #fff;
      }
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
  onChange?(index: number): void
}

function BridgeGroomTab({ onChange }: Props) {
  const [selectedItem, setSelectedItem] = useState(0)
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
    setSelectedItem(index)
    setCoverStyle(getCoverStyle(index))
    onChange?.(index)
  }

  useEffect(() => {
    setCoverStyle(getCoverStyle(0))
  }, [])

  return (
    <Wrapper>
      <Cover style={coverStyle} />
      <Item
        selected={selectedItem === 0}
        onClick={handleItemClick(0)}
        ref={(ref) => (itemRefs.current[0] = ref!)}
      >
        <Groom />
      </Item>
      <Item
        selected={selectedItem === 1}
        onClick={handleItemClick(1)}
        ref={(ref) => (itemRefs.current[1] = ref!)}
      >
        <Bride />
      </Item>
    </Wrapper>
  )
}

export default BridgeGroomTab
