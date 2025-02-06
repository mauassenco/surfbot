import * as Yup from 'yup';

const validationSchemaBasic = Yup.object().shape({
  nome: Yup.string().required('Nome é um campo obrigatório').min(6, 'Nome deve ter no mínimo 3 caracteres'),
  email: Yup.string().email().required('Email é um campo obrigatório'),
  cpf: Yup.string().required('CPF é um campo obrigatório').min(11, 'CPF deve ter no mínimo 11 caracteres'),
  endereco: Yup.string().required('Endereço é um campo obrigatório'),
  estado: Yup.string().required('Estado é um campo obrigatório'),
  cep: Yup.string().required('CEP é um campo obrigatório'),
  nome_no_cartao: Yup.string().required('Nome no cartão é um campo obrigatório'),
  data_de_expedicao_mes: Yup.string()
    .required('Data de expedição é um campo obrigatório')
    .min(4, 'Mês deve ter com 2 digitos'),
  data_de_expedicao_ano: Yup.string().required('Data de expedição é um campo obrigatório').min(4, 'Ano com 4 digitos'),
  numero_do_cartao: Yup.string()
    .required('Número do cartão é obrigatório')
    .min(12, 'Número do cartão deve ter no mínimo 12 caracteres'),
  codigo_do_cartao: Yup.string()
    .required('CVV do cartão é obrigatório')
    .min(3, 'Número do cartão deve ter no mínimo 12 caracteres'),
});

export default validationSchemaBasic;
