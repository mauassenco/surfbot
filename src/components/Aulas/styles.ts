import styled from 'styled-components';

export const Aulas = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 2.813rem;
  width: 100% !important;
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 454px;
`;

export const ContainerRightTitle = styled.h2`
  font-size: ${({ theme }) => theme.sizes.xxl};
  color: ${({ theme }) => theme.colors.dark300};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding-bottom: 3.75rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.light100};

  span {
    color: ${({ theme }) => theme.colors.blue200};
  }
`;

export const ContainerRightFeatures = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2.8rem 0;
  font-weight: 300;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.sizes.lg};
  color: ${({ theme }) => theme.colors.dark200};
  border-bottom: 2px solid ${({ theme }) => theme.colors.light100};
`;

export const ContainerRightInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.8rem 0;
  gap: 2.2rem;
  font-weight: 300;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.sizes.md};
  color: ${({ theme }) => theme.colors.dark200};
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div:first-of-type {
    margin-top: -7.5rem;
  }
`;

export const ContainerLeftInfo = styled.div`
  align-self: flex-start;
  padding: 1.5rem 3rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: bold;

  h2 {
    color: ${({ theme }) => theme.colors.dark300};
    position: relative;
    margin-bottom: 1.2rem;
    text-transform: uppercase;
  }

  h2::before {
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

  p {
    position: relative;
    padding-bottom: 1.2rem;
    color: ${({ theme }) => theme.colors.light300};
  }

  span {
    color: ${({ theme }) => theme.colors.dark300};
  }

  p::before {
    content: '';
    position: absolute;
    top: 25%;
    left: -1rem;
    transform: translate(-50%, -50%);
    width: 10px;
    border: 2px solid ${({ theme }) => theme.colors.blue200};
  }
`;

export const ContainerLeftInfoItem = styled.div``;
