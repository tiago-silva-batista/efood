import { LogoImage, HeaderBar, HeaderTitle } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <HeaderBar>
      <LogoImage src={logo} alt="Logo do restaurante" />

      <HeaderTitle>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </HeaderTitle>
    </HeaderBar>
  )
}

export default Header
