import styled from 'styled-components';

export const Aulas = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.813rem 0 3.4rem;
  background-color: ${({ theme }) => theme.colors.light100};
`;

export const AulasTitle = styled.h2`
  font-size: ${({ theme }) => theme.sizes.xxl};
  color: ${({ theme }) => theme.colors.dark200};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding-bottom: 3.75rem;
  position: relative;

  img {
    position: absolute;
    top: -55%;
  }
`;

export const AulasCardContainer = styled.div`
  display: flex;
  gap: 1.8rem;
`;

export const AulasFooter = styled.div`
  max-width: 25.5rem;
  font-weight: 300;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark200};
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-top: 1.875rem;

  p:first-of-type span {
    color: ${({ theme }) => theme.colors.red100};
    font-weight: 500;
  }

  p:last-of-type span {
    border-bottom: 2px solid ${({ theme }) => theme.colors.red100};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark200};
  }
`;
