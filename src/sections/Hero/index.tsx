import { Link } from 'react-router-dom';
import RightArrowWhite from '../../assets/images/right-arrow-white.svg';

// Styles
import * as Styles from './styles';
import usePaymentStore from '../../store/payment';
import type { ChangeEvent } from 'react';

const Hero = () => {
  const { setEmail } = usePaymentStore();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setEmail(target.value);
  };

  return (
    <Styles.Hero>
      <Styles.HeroTitleContainer>
        <Styles.HeroTile>Escola de Surf</Styles.HeroTile>
        <Styles.HeroCtaContainer>
          <input type="email" name="email" id="email" placeholder="Email" onChange={handleEmailChange} />
          <Link to={'/matricula'}>
            <p>Matricule-se</p>
            <img src={RightArrowWhite} alt="seta branca para a direita" />
          </Link>
        </Styles.HeroCtaContainer>
      </Styles.HeroTitleContainer>
    </Styles.Hero>
  );
};

export default Hero;
