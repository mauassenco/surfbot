import styled from 'styled-components';

export const FormSectionContainer = styled.section`
  margin: 3.74rem 0 4rem;
  padding: 0 3.4rem;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;

  button {
    background-color: ${({ theme }) => theme.colors.blue200};
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.sizes.md};
    border-radius: ${({ theme }) => theme.radius.sm};
    padding: 1.125rem 1.75rem;
    text-transform: uppercase;
    margin: 1rem 0;
    font-weight: 600;
  }

  form {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0;
  }
`;

export const FromLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 570px;
`;

export const FromRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

export const SingleInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
`;

export const DoubleInput = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  gap: 1.8rem;

  div {
    display: block;
    width: 100%;
  }
`;

export const FormFooter = styled.div`
  margin-top: 1.8rem;

  p {
    font-family: ${({ theme }) => theme.fonts.third};
    color: ${({ theme }) => theme.colors.dark200};
    font-size: ${({ theme }) => theme.sizes.md};
    font-weight: 300;
  }

  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  div > p {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.dark200};
    font-size: ${({ theme }) => theme.sizes.sm};
  }
`;
