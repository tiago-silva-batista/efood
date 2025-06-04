import styled from 'styled-components'

import { colors } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.orange};
  color: ${colors.lightBeige};
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  margin: 5px;
`
