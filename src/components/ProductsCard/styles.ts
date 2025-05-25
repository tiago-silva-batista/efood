import styled from 'styled-components'
import { colors } from '../../styles'

export const SectionContainer = styled.section`
  max-width: 100%;
  padding: 56px 0 40px 16px;
  box-sizing: border-box;
  background-color: ${colors.lightBeige};
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`
