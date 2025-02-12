import { Link } from 'react-router-dom';
import { CardsProps } from './types';
import Surfboard from '../../assets/images/surfbot-icon.svg';
import RightArrowWhite from '../../assets/images/right-arrow-white.svg';
import usePaymentStore from '../../store/payment';

// Styles
import * as Styles from './styles';

const Card = ({ card }: CardsProps) => {
  const { setPlano, plano } = usePaymentStore();
  const handlePlano = () => {
    setPlano(card.title);
    console.log(plano);
    console.log(card.title);
  };

  return (
    <Styles.Card>
      <Styles.CardHeader>
        <Styles.CardIcon>
          {Array(card.boards)
            .fill(null)
            .map((_, index) => (
              <img key={index} src={Surfboard} alt="surfboard" />
            ))}
        </Styles.CardIcon>
        <Styles.CardTitle>{card.title}</Styles.CardTitle>
      </Styles.CardHeader>
      <Styles.CardBody>
        {card.items.map((item) => (
          <p key={item.description}>{item.description}</p>
        ))}
      </Styles.CardBody>
      <Styles.CardFooter>
        <p>R$ {card.price},00 / Aula</p>
        {card.showButton && (
          <Link to="/matricula" onClick={handlePlano}>
            <p>Matricule-se</p>
            <img src={RightArrowWhite} alt="um flecha para a direita" />
          </Link>
        )}
      </Styles.CardFooter>
    </Styles.Card>
  );
};

export default Card;
