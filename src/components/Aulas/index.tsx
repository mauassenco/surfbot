import { HashLink } from 'react-router-hash-link';
import Waves from '../../assets/images/ondas.svg';
import Card from '../Card';
import cards from '../../data/index';
// Styles
import * as Styles from './styles';

const Aulas = () => {
  return (
    <Styles.Aulas id="aulas">
      <Styles.AulasTitle>
        <img src={Waves} alt="ondas" />
        Aulas
      </Styles.AulasTitle>
      <Styles.AulasCardContainer>
        {cards.map((card) => (
          <Card key={card.title} card={{ ...card, showButton: true }} />
        ))}
      </Styles.AulasCardContainer>
      <Styles.AulasFooter>
        <p>
          Possui um grupo com mais de <span>3 pessoas</span>?
        </p>
        <p>
          Entre{' '}
          <span>
            <HashLink to="/#contato" smooth>
              em contato
            </HashLink>
          </span>{' '}
          para um desconto personalizado.
        </p>
      </Styles.AulasFooter>
    </Styles.Aulas>
  );
};

export default Aulas;
