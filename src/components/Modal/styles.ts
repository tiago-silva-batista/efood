import styled from 'styled-components'
import { colors } from '../../styles'

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

export const ModalContent = styled.div`
  background: ${colors.orange};
  padding: 24px;
  max-width: 1024px;
  width: 100%;
  color: ${colors.white};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

export const CloseButton = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`
