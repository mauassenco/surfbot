import { useState } from 'react';

import RadioChecked from '../../assets/images/ellipse-active.svg';
import RadioUnChecked from '../../assets/images/ellipse.svg';

import cards from '../../data';
import Card from '../Card';

// Styles
import * as Styles from './styles';
const FormPlanos = () => {
  const [choosedPlan, setChoosedPlan] = useState('infantil');

  const togglePlan = (plan: string) => {
    setChoosedPlan(plan);
    console.log(plan);
  };

  const filteredCards = cards.filter((card) => card.title.toLowerCase().includes(choosedPlan.toLowerCase()));

  return (
    <Styles.PlansSection>
      <Styles.PlansSectionContainer>
        <h3>Escolha o Plano</h3>
        <Styles.Tabs>
          <div
            className={choosedPlan === 'infantil' ? 'tabs active-tab' : 'tabs'}
            onClick={() => togglePlan('infantil')}
          >
            <img src={choosedPlan === 'infantil' ? RadioChecked : RadioUnChecked} alt="" />
            <p>Infantil</p>
          </div>
          <div className={choosedPlan === 'adulto' ? 'tabs active-tab' : 'tabs'} onClick={() => togglePlan('adulto')}>
            <img src={choosedPlan === 'adulto' ? RadioChecked : RadioUnChecked} alt="" />
            <p>Adulto</p>
          </div>
          <div
            className={choosedPlan === 'profissional' ? 'tabs active-tab' : 'tabs'}
            onClick={() => togglePlan('profissional')}
          >
            <img src={choosedPlan === 'profissional' ? RadioChecked : RadioUnChecked} alt="" />
            <p>Profissional</p>
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
