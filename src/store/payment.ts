import { create } from 'zustand';

interface PaymentStore {
  pagamento: string;
  plano: string;
  preco: number;
  email: string;
  setPagamento: (pagamento: string) => void;
  setPlano: (nome: string) => void;
  setPreco: (preco: number) => void;
  setEmail: (email: string) => void;
}

export const usePaymentStore = create<PaymentStore>((set) => ({
  pagamento: 'cartao',
  plano: 'infantil',
  preco: 49,
  email: '',
  setPagamento: (pagamento) => set({ pagamento }),
  setPlano: (plano) => set({ plano }),
  setPreco: (preco) => set({ preco }),
  setEmail: (email) => set({ email }),
}));

export default usePaymentStore;
