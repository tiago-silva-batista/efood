import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.lightBeige};
  border: 1px solid ${colors.orange};
  width: 100%;
  max-width: 472px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  position: relative;
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 217px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Category = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Info = styled.div`
  padding: 16px;
`

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;

  .rating {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 18px;
    color: ${colors.orange};

    img {
      width: 20px;
      height: 20px;
      margin-left: 4px;
    }
  }
`

export const Title = styled.h3`
  color: ${colors.orange};
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.orange};
  }

  img {
    width: 16px;
    height: 16px;
    margin-left: 4px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  margin-bottom: 16px;
`
