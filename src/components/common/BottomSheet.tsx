import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { ReactNode, useEffect, useRef } from 'react'

import CloseIcon from '@icons/Close'

import { useScrollBlock } from '../../hooks/useScrollBlock'

const up = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`
const Wrapper = styled.div`
  height: 100vh;

  background: #fff;

  z-index: 999;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  animation: ${up} 0.25s ease;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

type Props = {
  children?: ReactNode
  onClose?: () => void
}
function BottomSheet({ children, onClose }: Props) {
  const [blockScroll, allowScroll] = useScrollBlock()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const handleClose = () => {
    if (!wrapperRef.current || !overlayRef.current) return

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

    overlayRef.current.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
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
    <>
      <Overlay ref={overlayRef} onClick={handleClose} />
      <Wrapper ref={wrapperRef}>
        <Button onClick={handleClose}>
          <CloseIcon />
        </Button>
        {children}
      </Wrapper>
    </>
  )
}

export default BottomSheet
