import CustomInput from '../CustomInput';

import usePaymentStore from '../../store/payment';
// Styles
import * as Styles from './styles';
import { Field } from 'formik';

const FormPagamento = () => {
  const { setPagamento, pagamento } = usePaymentStore();

  return (
    <Styles.PaymentSection>
      <h3>Forma de Pagamento</h3>
      <div className="container">
        <Styles.Tabs>
          <div role="group" aria-labelledby="my-radio-group-b" className="group">
            <label className={pagamento === 'cartao' ? 'tabs active-tab' : 'tabs'}>
              <Field type="radio" name="pagamento" value="cartao" onClick={() => setPagamento('cartao')} />
              Cartão de Crádito
            </label>
            <label className={pagamento === 'boleto' ? 'tabs active-tab' : 'tabs'}>
              <Field type="radio" name="pagamento" value="boleto" onClick={() => setPagamento('boleto')} />
              Boleto Bancário
            </label>
          </div>
        </Styles.Tabs>

        <div className="content-tabs">
          <div className={pagamento === 'cartao' ? 'payment-content active-content' : 'payment-content'}>
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

          <div className={pagamento === 'boleto' ? 'payment-content active-content' : 'payment-content'}>
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
