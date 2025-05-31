import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.orange};
  border: ${colors.orange};
  padding: 8px;
  max-width: 320px;
  width: 100%;
  text-align: left;
  color: ${colors.white};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 8px;
  }

  h3 {
    font-weight: bold;
    margin-top: 8px;
    font-size: 16px;
    color: ${colors.beige};
  }

  p {
    font-size: 14px;
    margin-top: 8px;
    line-height: 22px;
    color: ${colors.beige};
    flex-grow: 1; // faz o parágrafo ocupar o espaço restante
  }

  button {
    width: 100%;
    margin-top: 12px;
    background-color: ${colors.beige};
    color: ${colors.orange};
    font-weight: bold;
    border: 1px solid transparent;
    padding: 8px 16px;
    cursor: pointer;
    transition: 0.8s ease;
    min-height: 24px;
    box-sizing: border-box;

    &:hover {
      background-color: ${colors.orange};
      color: ${colors.beige};
      border-color: ${colors.beige};
    }
  }
`
