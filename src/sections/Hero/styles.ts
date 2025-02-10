import BgHero from '../../assets/images/bg-hero-2.webp';

import styled from 'styled-components';

export const Hero = styled.section`
  height: 400px;
  background-image: url(${BgHero});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 0 2.813rem 2.813rem 2.813rem;
`;

export const HeroTile = styled.h1`
  font-size: ${({ theme }) => theme.sizes.xxl};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const HeroTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeroCtaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 5px 5px rgba(23, 24, 45, 0.4);
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.sizes.md};
  font-weight: semibold;

  input {
    border-radius: ${({ theme }) => theme.radius.sm} 0 0 ${({ theme }) => theme.radius.sm};
    padding: 16px;
    outline: none;
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.light200};
  }

  a {
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 1.25rem;
    padding: 16px;
    /* height: 50px; */
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.red300};
    border-radius: 0 ${({ theme }) => theme.radius.sm} ${({ theme }) => theme.radius.sm} 0;

    &:hover {
      background-color: ${({ theme }) => theme.colors.red200};
    }
  }
`;
