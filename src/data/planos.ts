export interface IPlano {
  nome: string;
  price: number;
}

export const planos: IPlano[] = [
  {
    nome: 'infantil',
    price: 49,
  },
  {
    nome: 'adulto',
    price: 69,
  },
  {
    nome: 'profissional',
    price: 99,
  },
];
