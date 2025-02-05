import RightArrowWhite from '../../assets/images/right-arrow-white.svg';
import RightArroRed from '../../assets/images/right-arrow-red.svg';
import ContatoSideBG from '../../assets/images/contato-bg-icones.svg';

// Styles
import * as Styles from './styles';

const Contato = () => {
  return (
    <Styles.Contato id="contato">
      <Styles.ContatoTitle>Contato</Styles.ContatoTitle>
      <Styles.ContatoContainer>
        <Styles.ContatoForm>
          <label htmlFor="name">
            Nome
            <input type="text" name="name" id="name" placeholder="" />
          </label>
          <label htmlFor="email">
            Email
            <input type="email" name="email" id="email" placeholder="" />
          </label>
          <label htmlFor="message">
            Mensagem
            <textarea name="message" id="message" placeholder="" />
          </label>
          <button type="submit">
            {' '}
            <p>Enviar mensagem</p>
            <img src={RightArrowWhite} alt="" />
          </button>
        </Styles.ContatoForm>
        <Styles.HorizontalLine />
        <Styles.ContatoInfo>
          <Styles.InfoItems>
            <Styles.InfoItem>
              <h3>Endereço</h3>
              <p>Praia Mansa nº 47,</p>
              <p>Rio de Janeiro - RJ</p>
              <p>Procure a barraca vermelha</p>
              <a href="">
                <p>Ver no mapa</p>
                <img src={RightArroRed} alt="" />
              </a>
            </Styles.InfoItem>
            <Styles.InfoItem>
              <h3>Email & Telefone</h3>
              <p>contato@surfbot.com</p>
              <p>21 99999-9999</p>
            </Styles.InfoItem>
            <Styles.InfoItem>
              <h3>Horário</h3>
              <p>De sexta à Sábado</p>
              <p>Das 06:00 às 14:00</p>
            </Styles.InfoItem>
          </Styles.InfoItems>
          <img src={ContatoSideBG} alt="" />
        </Styles.ContatoInfo>
      </Styles.ContatoContainer>
    </Styles.Contato>
  );
};

export default Contato;
