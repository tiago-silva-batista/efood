import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.orange};
  color: ${colors.lightBeige};
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
  margin: 5px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: 0.3s ease;

  &:hover {
    background-color: ${colors.lightBeige};
    color: ${colors.orange};
    border-color: ${colors.orange};
  }
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.orange};
  color: ${colors.lightBeige};
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid transparent;
  transition: 0.3s ease;

  &:hover {
    background-color: ${colors.lightBeige};
    color: ${colors.orange};
    border-color: ${colors.orange};
  }
`
