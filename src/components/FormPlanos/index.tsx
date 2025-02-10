import usePaymentStore from '../../store/payment';
import { Field } from 'formik';

import cards from '../../data/cards';
import Card from '../Card';

// Styles
import * as Styles from './styles';
import { planos, type IPlano } from '../../data/planos';

const FormPlanos = () => {
  const { setPlano, setPreco, plano } = usePaymentStore();

  const filteredCards = cards.filter((card) => card.title.toLowerCase().includes(plano.toLowerCase()));

  const ChoosePlan = (nome: string, preco: number) => {
    setPlano(nome);
    setPreco(preco);
  };

  return (
    <Styles.PlansSection>
      <Styles.PlansSectionContainer>
        <h3>Escolha o Plano</h3>
        <Styles.Tabs>
          <div role="group" aria-labelledby="my-radio-group" className="group">
            {planos.map((item: IPlano) => (
              <label key={item.nome} className={plano === item.nome ? 'tabs active-tab' : 'tabs'}>
                <Field
                  checked={plano === item.nome ? true : false}
                  type="radio"
                  name="plano"
                  value={item.nome}
                  onClick={() => ChoosePlan(item.nome, item.price)}
                />
                {item.nome}
              </label>
            ))}
          </div>
        </Styles.Tabs>

        <div className="content-tabs">
          {filteredCards.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </div>
      </Styles.PlansSectionContainer>
    </Styles.PlansSection>
  );
};

export default FormPlanos;
