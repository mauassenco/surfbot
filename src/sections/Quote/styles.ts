import BgQuote from '../../assets/images/bg-quote-2.webp';

import styled from 'styled-components';

export const Quote = styled.section`
  height: 480px;
  background-image: url(${BgQuote});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2.813rem 2.813rem 2.813rem;
`;

export const QuoteTile = styled.h1`
  font-size: ${({ theme }) => theme.sizes.xxl};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const QuoteTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  align-items: center;
  max-width: 640px;

  p {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
