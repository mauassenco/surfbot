import styled from 'styled-components';

export const Contato = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.813rem 0 3.4rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ContatoTitle = styled.h2`
  font-size: ${({ theme }) => theme.sizes.xxl};
  color: ${({ theme }) => theme.colors.dark200};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding-bottom: 3.75rem;
  position: relative;
`;

export const ContatoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 2.813rem;
`;

export const ContatoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  max-width: 25.5rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 600;
  padding-right: 7rem;

  label {
    font-size: ${({ theme }) => theme.sizes.md};
    color: ${({ theme }) => theme.colors.dark200};
    display: flex;
    flex-direction: column;
  }

  input,
  textarea {
    background: ${({ theme }) => theme.colors.light100};
    height: 50px;
    border-radius: ${({ theme }) => theme.radius.sm};
    box-shadow: 0 2px 2px ${({ theme }) => theme.colors.light200};
    /* width: 100%; */
    width: 29.3rem;
  }

  textarea {
    height: 11.25rem;
  }

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    gap: 1.25rem;
    padding: 16px;
    height: 50px;
    max-width: 14.37rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.dark200};
    border-radius: ${({ theme }) => theme.radius.sm};

    &:hover {
      background-color: ${({ theme }) => theme.colors.dark100};
    }
  }
`;

export const HorizontalLine = styled.div`
  background-color: ${({ theme }) => theme.colors.light100};
  width: 2px;
  height: 30rem;
  /* margin: 0 7.2rem; */
`;

export const ContatoInfo = styled.div`
  display: flex;
  max-width: 25.5rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 600;
  width: 29.3rem;

  img {
    max-height: 336px;
    margin-top: -2rem;
  }
`;

export const InfoItems = styled.div`
  max-width: 283px;
`;

export const InfoItem = styled.div`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.dark200};
  border-bottom: 2px solid ${({ theme }) => theme.colors.light100};

  &:last-child {
    border: none;
  }

  &:last-child h3::before {
    content: '';
    position: absolute;
    bottom: 0.15rem;
    left: -0.6rem;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 2px solid #16c70b;
  }

  h3 {
    font-size: ${({ theme }) => theme.sizes.md};
    font-weight: 600;
    margin: 15px 0 5px;
    position: relative;
  }

  p {
    font-size: ${({ theme }) => theme.sizes.sm};
    font-weight: 300;
  }

  p:last-of-type {
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  a > img {
    padding-bottom: 10px;
  }

  a > p {
    text-transform: uppercase;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.dark200};
    font-size: ${({ theme }) => theme.sizes.sm};
  }
`;
