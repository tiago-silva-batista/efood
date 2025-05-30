import { useEffect } from 'react'
import { ModalOverlay, ModalContent, CloseButton } from './styles'

import close from '../../assets/images/close.png'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!isOpen) return null

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton src={close} onClick={onClose}></CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal
