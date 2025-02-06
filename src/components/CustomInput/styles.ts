import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.sizes.md};

  label {
    text-transform: uppercase;
    margin-bottom: 5px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.dark200};
  }

  input {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    padding: 15px;
    font-size: 16px;
    inset: none;
    box-shadow: 0px 2px 2px 0 rgba(187, 204, 221, 0.4);
    background-color: ${({ theme }) => theme.colors.light100};
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.light200};
    font-weight: 600;
  }
`;

export const ErrorStyled = styled.span`
  color: ${({ theme }) => theme.colors.red300};
  font-size: ${({ theme }) => theme.sizes.sm};
  text-transform: none;
  padding-top: 5px;
`;
