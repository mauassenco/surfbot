import { Link } from 'react-router-dom';
import Surfboard from '../../assets/images/surfbot-icon.svg';
import RightArrowWhite from '../../assets/images/right-arrow-white.svg';

// Styles
import * as Styles from './styles';

const Card = () => {
  return (
    <Styles.Card>
      <Styles.CardHeader>
        <Styles.CardIcon>
          <img src={Surfboard} alt="surfboard" />
        </Styles.CardIcon>
        <Styles.CardTitle>Infantil</Styles.CardTitle>
      </Styles.CardHeader>
      <Styles.CardBody>
        <p>Público entre 5 e 15 anos</p>
        <p>Equipamentos fornecidos</p>
        <p>Horários de Sex. à Sab.</p>
        <p>2 horas seguidas de aula</p>
      </Styles.CardBody>
      <Styles.CardFooter>
        <p>R$ 49,00 / Aula</p>
        <Link to="/matricula">
          <p>Matricule-se</p>
          <img src={RightArrowWhite} alt="" />
        </Link>
      </Styles.CardFooter>
    </Styles.Card>
  );
};

export default Card;
