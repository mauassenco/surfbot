import Logo from '../../assets/images/surfbot-icon-white.svg';

// Styles
import * as Styles from './styles';

const Footer = () => {
  return (
    <Styles.Footer>
      <p>
        Surfnet - <span>{new Date().getFullYear()}</span> Alguns direitos reservados.
      </p>
      <img src={Logo} alt="" />
    </Styles.Footer>
  );
};

export default Footer;
