import { useState } from 'react';
import CustomInput from '../CustomInput';
import RadioChecked from '../../assets/images/ellipse-active.svg';
import RadioUnChecked from '../../assets/images/ellipse.svg';

// Styles
import * as Styles from './styles';

const FormPagamento = () => {
  const [paymentMethod, setPaymentMethod] = useState('cartao');

  const togglePayment = (payment_method: string) => {
    setPaymentMethod(payment_method);
  };

  return (
    <Styles.PaymentSection>
      <h3>Forma de Pagamento</h3>
      <div className="container">
        <Styles.Tabs>
          <div
            className={paymentMethod === 'cartao' ? 'tabs active-tab' : 'tabs'}
            onClick={() => togglePayment('cartao')}
          >
            <img src={paymentMethod === 'cartao' ? RadioChecked : RadioUnChecked} alt="" />
            <p>Cartão de Crédito</p>
          </div>
          <div
            className={paymentMethod === 'boleto' ? 'tabs active-tab' : 'tabs'}
            onClick={() => togglePayment('boleto')}
          >
            <img src={paymentMethod === 'boleto' ? RadioChecked : RadioUnChecked} alt="" />
            <p> Boleto Bancário</p>
          </div>
        </Styles.Tabs>

        <div className="content-tabs">
          <div className={paymentMethod === 'cartao' ? 'payment-content active-content' : 'payment-content'}>
            <Styles.DoubleInput>
              <CustomInput
                type="text"
                placeholder="Nome impresso no Cartão"
                name="nome_no_cartao"
                label="Nome no Cartão"
              />
              <div id="tripple">
                <CustomInput type="text" placeholder="Mês" label="Data de Expedição" name="data_de_expedicao_mes" />
                <CustomInput type="text" placeholder="Ano" name="data_de_expedicao_ano" label="Ano" />
              </div>
            </Styles.DoubleInput>
            <Styles.DoubleInput>
              <CustomInput
                type="text"
                placeholder="5555 5555 5555 5555"
                label="Número do Cartão"
                name="numero_do_cartao"
              />
              <CustomInput type="text" placeholder="XXX" label="Código de Segurança" name="codigo_do_cartao" />
            </Styles.DoubleInput>
          </div>

          <div className={paymentMethod === 'boleto' ? 'payment-content active-content' : 'payment-content'}>
            <div>
              <p>NUMERODO BOLETO</p>
              <p>CODIGO DO BOLETO</p>
            </div>
          </div>
        </div>
      </div>
    </Styles.PaymentSection>
  );
};

export default FormPagamento;
