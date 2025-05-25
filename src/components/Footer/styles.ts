import styled from 'styled-components'

import { colors } from '../../styles'

export const FooterBottom = styled.div`
  background-color: ${colors.beige};
  padding: 20px;
  margin-top: 120px;
`

export const FooterLogo = styled.div`
  text-align: center;
  padding-top: 40px;

  img {
    cursor: pointer;
    max-width: 100%;
    height: auto;
  }
`

export const SocialNetworks = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  list-style: none;

  img {
    cursor: pointer;
    max-width: 30px;
  }
`

export const DescriptionFooter = styled.p`
  text-align: center;
  padding-bottom: 40px;
  font-size: 10px;
  line-height: 22px;
`
