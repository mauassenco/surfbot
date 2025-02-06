export type CardItem = {
  description: string;
};

export type CardsProps = {
  card: {
    title: string;
    boards: number;
    price: number;
    showButton?: boolean;
    items: CardItem[];
  };
};
