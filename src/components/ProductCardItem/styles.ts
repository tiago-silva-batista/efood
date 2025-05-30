import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.orange};
  border: ${colors.orange};
  padding: 8px;
  max-width: 320px;
  text-align: left;
  color: ${colors.white};
  border-radius: 8px;

  img {
    width: 100%;
    border-radius: 8px;
  }

  h3 {
    font-weght: bold;
    margin-top: 8px;
    font-size: 16px;
    color: ${colors.beige};
  }

  p {
    font-size: 14px;
    margin-top: 8px;
    line-height: 22px;
    color: ${colors.beige};
  }

  button {
    width: 100%;
    margin-top: 12px;
    background-color: ${colors.beige};
    color: ${colors.orange};
    font-weight: bold;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
  }
`
