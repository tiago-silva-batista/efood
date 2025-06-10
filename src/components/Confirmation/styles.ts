import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`

export const Modal = styled.div`
  background: ${colors.orange};
  padding: 24px;
  width: 100%;
  max-width: 1024px;
  color: ${colors.beige};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  z-index: 9999;

  @media (max-width: 768px) {
    padding: 24px;
    width: 90%;
  }
`

export const CloseButton = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`

export const Text = styled.p`
  margin: 8px 0;
  font-weight: bold;
`

export const ConfirmButton = styled.button`
  background-color: ${colors.beige};
  color: ${colors.orange};
  font-weight: bold;
  width: 50%;
  padding: 4px;
  border: 2px solid transparent;
  transition: 0.3s ease;
  margin-top: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.orange};
    color: ${colors.beige};
    border-color: ${colors.beige};
  }
`
