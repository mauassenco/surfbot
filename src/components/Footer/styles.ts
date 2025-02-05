import styled from 'styled-components';

export const Footer = styled.footer`
  font-weight: 600;
  background: ${({ theme }) => theme.colors.blue200};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.sizes.md};
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 0 2.813rem;
  height: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7.5rem;
`;
