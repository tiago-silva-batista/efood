import styled from 'styled-components'
import { colors } from '../../styles'

export const ModalContentContainer = styled.div`
  display: flex;
  height: 100%;
  gap: 24px;
`

export const ProductImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const InfoContainer = styled.div`
  flex: 1;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.beige};
  margin-bottom: 8px;
`

export const Description = styled.p`
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 14px;
  color: ${colors.beige};
  line-height: 22px;
`

export const BuyButton = styled.button`
  width: 218px;
  height: 24px;
  padding: 4px;
  background-color: ${colors.beige};
  color: ${colors.orange};
  border: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`
