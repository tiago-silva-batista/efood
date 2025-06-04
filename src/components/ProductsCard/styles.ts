import styled from 'styled-components'
import { colors } from '../../styles'

export const SectionContainer = styled.section`
  max-width: 100%;
  padding: 56px 0 40px 16px;
  box-sizing: border-box;
  background-color: ${colors.lightBeige};
`

export const ListHome = styled.ul`
  list-style: none;
  padding: 0;
  margin: 32px 0;
  margin-bottom: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  }
`

export const ListModal = styled.ul`
  list-style: none;
  padding: 0;
  margin: 32px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  }
`
