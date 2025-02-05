import Waves from '../../assets/images/ondas.svg';
import Card from '../Card';
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
        <Card />
        <Card />
        <Card />
      </Styles.AulasCardContainer>
      <Styles.AulasFooter>
        <p>
          Possui um grupo com mais de <span>3 pessoas</span>?
        </p>
        <p>
          Entre <span>em contato</span> para um desconto personalizado.
        </p>
      </Styles.AulasFooter>
    </Styles.Aulas>
  );
};

export default Aulas;
