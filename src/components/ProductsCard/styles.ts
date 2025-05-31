import styled from 'styled-components'
import { colors } from '../../styles'

export const SectionContainer = styled.section`
  max-width: 100%;
  padding: 56px 0 40px 16px;
  box-sizing: border-box;
  background-color: ${colors.lightBeige};
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: stretch;

  li {
    flex: 1 1 320px;
    display: flex;
  }
`
