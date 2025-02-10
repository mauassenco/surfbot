import * as Yup from 'yup';

export interface formInitialValues {
  nome: string;
  email: string;
  cpf: string;
  endereco: string;
  estado: string;
  cep: string;
  nome_no_cartao: string;
  data_de_expedicao_mes: string;
  data_de_expedicao_ano: string;
  numero_do_cartao: string;
  codigo_do_cartao: string;
  // plano: 'infantil' | 'adulto' | 'profissional';
  plano: string;
  pagamento: 'cartao' | 'boleto';
}

const validationSchemaBasic = Yup.object().shape({
  nome: Yup.string().required('Nome é um campo obrigatório').min(6, 'Nome deve ter no mínimo 3 caracteres'),
  email: Yup.string().email().required('Email é um campo obrigatório'),
  cpf: Yup.string().required('CPF é um campo obrigatório').min(11, 'CPF deve ter no mínimo 11 caracteres'),
  endereco: Yup.string().required('Endereço é um campo obrigatório'),
  estado: Yup.string().required('Estado é um campo obrigatório'),
  cep: Yup.string().required('CEP é um campo obrigatório'),
  nome_no_cartao: Yup.string().min(6, 'ome deve ter no cartão mínimo 3 caracteres'),
  data_de_expedicao_mes: Yup.string().min(2, 'Mês deve ter com 2 digitos'),
  data_de_expedicao_ano: Yup.string().min(4, 'Ano com 4 digitos'),
  numero_do_cartao: Yup.string().min(12, 'Número do cartão deve ter no mínimo 12 caracteres'),
  codigo_do_cartao: Yup.string().min(3, 'Número do cartão deve ter no mínimo 12 caracteres'),
  // plano: Yup.string().oneOf(['infantil', 'adulto', 'profissional']),
  plano: Yup.string(),
  pagamento: Yup.string().oneOf(['cartao', 'boleto']),
});

export default validationSchemaBasic;
