import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
  min-height: 100vh;
`

export const Sidebar = styled.aside`
  background-color: ${colors.orange};
  width: 360px;
  padding: 16px;
  color: ${colors.lightBeige};
`

export const Title = styled.h2`
  margin-bottom: 16px;
`

export const Label = styled.label`
  display: block;
  font-weight: bold;
  font-size: 14px;
  margin-top: 8px;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: none;
  margin-top: 4px;
  border-radius: 4px;
  margin-bottom: 8px;
`

export const Row = styled.div`
  display: flex;
  gap: 8px;

  > div {
    flex: 1;
  }
`

interface ButtonProps {
  $secondary?: boolean
}

export const Button = styled.button<ButtonProps>`
  background-color: ${({ $secondary }) =>
    $secondary ? colors.lightBeige : colors.lightBeige};
  color: ${({ $secondary }) => ($secondary ? colors.orange : colors.orange)};
  font-weight: bold;
  width: 100%;
  padding: 12px;
  border: none;
  margin-top: 8px;
  border-radius: 8px;
  cursor: pointer;
`
