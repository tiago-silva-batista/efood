import { Container } from '../../styles'
import { LogoImage } from '../Header/styles'

import {
  FooterBottom,
  FooterLogo,
  SocialNetworks,
  DescriptionFooter
} from './styles'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <FooterBottom>
    <div>
      <FooterLogo>
        <LogoImage src={logo} alt="logo" />
      </FooterLogo>

      <div>
        <SocialNetworks>
          <li>
            <img src={instagram} alt="Instagram" />
          </li>
          <li>
            <img src={facebook} alt="Facebook" />
          </li>
          <li>
            <img src={twitter} alt="Twitter" />
          </li>
        </SocialNetworks>
        <Container>
          <DescriptionFooter>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade <br /> dos produtos é toda
            do estabelecimento contratado.
          </DescriptionFooter>
        </Container>
      </div>
    </div>
  </FooterBottom>
)

export default Footer
