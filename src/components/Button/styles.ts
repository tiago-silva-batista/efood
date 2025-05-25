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
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.orange};
  color: ${colors.lightBeige};
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
  margin: 5px;
  cursor: pointer;
  text-decoration: none;
`
