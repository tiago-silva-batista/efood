import styled from 'styled-components'
import { colors } from '../../styles'

export const Sidebar = styled.aside`
  background-color: ${colors.orange};
  padding: 16px;
  color: ${colors.beige};
  width: 360px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  z-index: 1000;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Message = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
  line-height: 1.4;
`

export const Button = styled.button`
  background-color: ${colors.beige};
  color: ${colors.orange};
  font-weight: bold;
  width: 100%;
  padding: 4px;
  font-size: 14px;
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
