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
  padding: 0;
  color: ${colors.beige};
`

export const Title = styled.h2`
  margin-bottom: 12px;
`

export const Label = styled.label`
  display: block;
  font-weight: bold;
  font-size: 14px;
  margin-top: 8px;
`

export const Input = styled.input`
  background-color: ${colors.beige};
  width: 100%;
  padding: 4px;
  border: none;
  margin-top: 4px;
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
  background-color: ${colors.beige};
  color: ${colors.orange};
  font-weight: bold;
  width: 100%;
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
