import styled from 'styled-components'
import { colors } from '../../styles'

export const ModalBody = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
`

export const ProductImage = styled.img`
  width: 320px;
  height: auto;
`

export const ModalText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

export const ProductTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
  color: ${colors.beige};
`

export const ProductDescription = styled.p`
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 16px;
  color: ${colors.beige};
`

export const ProductServing = styled.p`
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 16px;
  color: ${colors.beige};
`

export const AddButton = styled.button`
  background-color: ${colors.beige};
  color: ${colors.orange};
  font-size: 14px;
  font-weight: bold;
  border: 2px solid transparent;
  padding: 4px 16px;
  cursor: pointer;
  transition: 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: ${colors.orange};
    color: ${colors.beige};
    border-color: ${colors.beige};
  }
`
