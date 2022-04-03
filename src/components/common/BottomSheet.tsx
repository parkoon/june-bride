import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { ReactNode, useEffect, useRef } from 'react'

import CloseIcon from '@icons/Close'

import { useScrollBlock } from '../../hooks/useScrollBlock'
import Portal from './Portal'

const up = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`
const Wrapper = styled.div<{ noPadding: boolean }>`
  height: 100vh;

  background: #fff;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  animation: ${up} 0.25s ease;

  padding: 72px 20px 0 20px;

  ${({ noPadding }) =>
    noPadding &&
    css`
      padding-left: 0;
      padding-right: 0;
    `}
`

const Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`

type Props = {
  children?: ReactNode
  noPadding?: boolean
  onClose?: () => void
}
function BottomSheet({ noPadding = false, children, onClose }: Props) {
  const [blockScroll, allowScroll] = useScrollBlock()
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleClose = () => {
    if (!wrapperRef.current) return

    const animation = wrapperRef.current.animate(
      [
        {
          transform: 'translateY(0)',
        },
        {
          transform: 'translateY(100%)',
        },
      ],
      { duration: 0.1 * 1000 }
    )

    animation.addEventListener('finish', () => onClose?.())
  }

  useEffect(() => {
    blockScroll()
    return () => allowScroll()
  }, [allowScroll, blockScroll])

  return (
    <Portal selector="#bottom-sheet">
      <Wrapper ref={wrapperRef} noPadding={noPadding}>
        <Button onClick={handleClose}>
          <CloseIcon />
        </Button>
        {children}
      </Wrapper>
    </Portal>
  )
}

export default BottomSheet
