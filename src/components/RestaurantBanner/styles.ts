import styled from 'styled-components'
import { colors } from '../../styles'

export const BannerWrapper = styled.div`
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
`
export const Image = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
`

export const InfoWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: stretch;
`

export const InfoContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;
`

export const Type = styled.p`
  color: ${colors.white};
  font-size: 32px;
`

export const Title = styled.h2`
  color: ${colors.white};
  font-size: 32px;
  font-weight: bold;
`
