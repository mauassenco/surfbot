import { Link } from 'react-router-dom';
import RightArrowWhite from '../../assets/images/right-arrow-white.svg';

// Styles
import * as Styles from './styles';

const Hero = () => {
  return (
    <Styles.Hero>
      <Styles.HeroTitleContainer>
        <Styles.HeroTile>Escola de Surf</Styles.HeroTile>
        <Styles.HeroCtaContainer>
          <input type="email" name="email" id="email" placeholder="Email" />
          <Link to="/matricula">
            <p>Matricule-se</p>
            <img src={RightArrowWhite} alt="" />
          </Link>
        </Styles.HeroCtaContainer>
      </Styles.HeroTitleContainer>
    </Styles.Hero>
  );
};

export default Hero;
