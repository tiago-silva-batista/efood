import styled from 'styled-components'
import Trash from '../../assets/images/trash.png'
import { colors } from '../../styles'

interface SidebarProps {
  isVisible: boolean
}

export const Sidebar = styled.aside<SidebarProps>`
  width: 360px;
  background-color: ${colors.orange};
  padding: 16px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  overflow-y: auto;
  color: ${colors.beige};
  transform: ${({ isVisible }) =>
    isVisible ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
`

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

export const CartItem = styled.div`
  display: flex;
  background: ${colors.beige};
  color: ${colors.orange};
  padding: 8px;
  margin-bottom: 12px;
  position: relative;
  height: 100px;
`

export const ProductImage = styled.img`
  width: 80px;
  height: 100%;
  object-fit: cover;
  margin-right: 8px;
`

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 16px;
    margin: 0;
    align-self: flex-start;
  }

  p {
    font-size: 14px;
    margin: auto 0;
  }
`

export const RemoveButton = styled.button`
  background: url(${Trash}) no-repeat center;
  background-size: contain;
  border: none;
  width: 20px;
  height: 20px;
  cursor: pointer;

  position: absolute;
  right: 8px;
  bottom: 8px;
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  font-size: 18px;
  font-weight: bold;
`

export const CheckoutButton = styled.button`
  background-color: ${colors.beige};
  color: ${colors.orange};
  padding: 8px;
  width: 100%;
  font-weight: bold;
  margin-top: 16px;
  border: 2px solid transparent;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${colors.orange};
    color: ${colors.beige};
    border-color: ${colors.beige};
  }
`
