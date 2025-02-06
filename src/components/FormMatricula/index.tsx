import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Locker from '../../assets/images/cadeado.svg';

import CustomInput from '../CustomInput';
import CustomSelect from '../CustomSelect';
import FormPagamento from '../FormPagamento';

// Styles
import * as Styles from './styles';
import validationSchemaBasic from './schema';
import FormPlanos from '../FormPlanos';

const estados = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espirito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Para',
  'Paraiba',
  'Pará',
  'Pernambuco',
  'Piau',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
];

const FormMatricula = () => {
  const initialValues = {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    estado: '',
    cep: '',
    nome_no_cartao: '',
    data_de_expedicao_mes: '',
    data_de_expedicao_ano: '',
    numero_do_cartao: '',
    codigo_do_cartao: '',
  };

  const handleSubmit = (
    values: Yup.InferType<typeof validationSchemaBasic>,
    { resetForm }: { resetForm: () => void },
  ) => {
    console.log(values);
    resetForm();
  };

  return (
    <Styles.FormSectionContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchemaBasic}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form>
          <Styles.FromLeftContainer>
            <CustomInput name="nome" type="text" label="Nome" />
            <CustomInput name="email" type="email" label="Email" />
            <CustomInput name="cpf" type="text" placeholder="111.111.111-11" label="CPF" />
            <Styles.DoubleInput>
              <CustomInput name="endereco" type="text" placeholder="Rua, Número e Bairro" label="Endereço" />
              <CustomSelect
                name="estado"
                placeholder="Selecione o Estado"
                options={estados.map((estado) => ({ value: estado, label: estado }))}
              />
            </Styles.DoubleInput>
            <Styles.DoubleInput>
              <CustomInput name="cep" type="text" placeholder="22.222-222" label="CEP" />
              <CustomSelect
                name="cidade"
                placeholder="Selecione a Cidade"
                options={estados.map((estado) => ({ value: estado, label: estado }))}
              />
            </Styles.DoubleInput>
            <FormPagamento />
            <Styles.FormFooter>
              <p>Seu cartão será debitado em R$ 49,00</p>
              <button className="button" type="submit">
                REALIZAR MATRÍCULA
              </button>
              <div className="">
                <img src={Locker} alt="cadeado" />
                <p>Informações seguras e criptografadas</p>
              </div>
            </Styles.FormFooter>
          </Styles.FromLeftContainer>
          {/*  */}
          <Styles.FromRightContainer>
            <FormPlanos />
          </Styles.FromRightContainer>
        </Form>
      </Formik>
    </Styles.FormSectionContainer>
  );
};

export default FormMatricula;
