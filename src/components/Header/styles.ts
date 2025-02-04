import styled from 'styled-components';

export const Header = styled.header`
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export const UpperBar = styled.div`
  font-size: 1rem;
  font-weight: semibold;
  background: ${({ theme }) => theme.colors.blue200};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.sizes.sm};
  padding: 0 2.813rem;
  height: 1.875rem;
  display: flex;
  align-items: center;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: center;
  padding: 0 2.813rem;
  height: 3.75rem;
  background-color: ${({ theme }) => theme.colors.dark300};
`;

export const MenuContainer = styled.ul`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  list-style: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.sizes.md};
`;
export const MenuItem = styled.li`
  position: relative;
  /* padding: 10px; */
  padding: 0 16px;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(16px, -50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    /* background-color: white; */
    border: 2px solid white;
  }
  &:last-child {
    border-bottom: 2px solid ${({ theme }) => theme.colors.red200};
    padding: 0;
    margin-left: 16px;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;
