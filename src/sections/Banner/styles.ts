import styled from 'styled-components';

export const BannerContainer = styled.section`
  font-family: ${({ theme }) => theme.fonts.primary};
  background-color: ${({ theme }) => theme.colors.light100};
  font-size: ${({ theme }) => theme.sizes.xxl};
  color: ${({ theme }) => theme.colors.dark200};
  display: flex;
  justify-content: center;
  align-items: center;
  width: full;
  height: 120px;
`;
