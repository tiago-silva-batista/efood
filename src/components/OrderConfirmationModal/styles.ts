import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const Modal = styled.div`
  background: ${colors.orange};
  padding: 32px;
  max-width: 700px;
  width: 100%;
  color: ${colors.beige};
  position: relative;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: ${colors.beige};
  font-size: 20px;
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
  margin-top: 24px;
  width: 100%;
  padding: 12px;
  background-color: ${colors.beige};
  color: ${colors.orange};
  border: none;
  cursor: pointer;
  font-weight: bold;
`
