import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.sm};
  width: 370px;
  height: 414px;
  box-shadow: 0px 5px 5px rgba(23, 24, 45, 0.4);
  position: relative;
  padding: 0 68px;
`;

export const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -18px;
`;

export const CardTitle = styled.h2`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.dark200};
  font-size: ${({ theme }) => theme.sizes.xl};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 600;
  padding: 1.5rem 0;
  margin-top: -12px;
`;

export const CardHeader = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.light100};
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.5rem 1.25rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.light100};
  p {
    position: relative;
    color: ${({ theme }) => theme.colors.dark200};
    font-size: ${({ theme }) => theme.sizes.sm};
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 300;
  }
  p::before {
    content: '';
    position: absolute;
    bottom: 0.05rem;
    left: -1rem;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.red300};
  }
`;

export const CardFooter = styled.div`
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.blue200};
  font-size: ${({ theme }) => theme.sizes.sm};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 600;

  a {
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    margin-top: 2rem;
    padding: 16px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.dark200};
    border-radius: ${({ theme }) => theme.radius.sm};

    &:hover {
      background-color: ${({ theme }) => theme.colors.dark100};
    }
  }
`;
