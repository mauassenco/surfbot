import styled from 'styled-components';

// export const PlansSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 1.875rem;
//   width: 100%;
//   max-width: 430px;
//   background-color: ${({ theme }) => theme.colors.light100};
//   border-radius: ${({ theme }) => theme.radius.sm};
//   box-shadow: 0px 2px 2px 0 rgba(187, 204, 221, 0.4);
// `;
// export const PlansSectionContainer = styled.div`
//   border-bottom: ${({ theme }) => theme.colors.light100} 2px solid;
//   padding-bottom: 1rem;
//   width: 100%;
//   max-height: fit-content;

//   h3 {
//     font-family: ${({ theme }) => theme.fonts.secondary};
//     color: ${({ theme }) => theme.colors.dark200};
//     font-size: ${({ theme }) => theme.sizes.md};
//     font-weight: 600;
//     /* padding-bottom: 1rem;*/
//     margin-bottom: 2rem;
//   }

//   label {
//     text-transform: capitalize;
//     white-space: pre;
//   }

//   .plan-content {
//     display: none;
//   }

//   .active-content {
//     display: block;
//     min-height: 200px;
//   }
// `;

// export const Tabs = styled.div`
//   display: flex;
//   align-items: center;
//   max-width: 396px;
//   height: 50px;
//   border-radius: ${({ theme }) => theme.radius.sm};
//   background-color: ${({ theme }) => theme.colors.primary};
//   font-family: ${({ theme }) => theme.fonts.secondary};
//   font-weight: 700;
//   overflow: hidden;
//   box-shadow: 0px 2px 2px 0 rgba(187, 204, 221, 0.4);
//   margin-bottom: 2.375rem;

//   div {
//     width: 50%;
//     height: 50px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 0.5rem;
//     color: ${({ theme }) => theme.colors.dark200};
//     cursor: pointer;
//   }

//   .tabs:nth-child(2n) {
//     border-left: 2px solid ${({ theme }) => theme.colors.light100};
//     border-right: 2px solid ${({ theme }) => theme.colors.light100};
//   }

//   .active-tab {
//     background-color: ${({ theme }) => theme.colors.light200};
//   }
// `;

export const PlansSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.875rem;
  width: 100%;
  max-width: 430px;
  background-color: ${({ theme }) => theme.colors.light100};
  border-radius: ${({ theme }) => theme.radius.sm};
  box-shadow: 0px 2px 2px 0 rgba(187, 204, 221, 0.4);
`;
export const PlansSectionContainer = styled.div`
  border-bottom: ${({ theme }) => theme.colors.light100} 2px solid;
  padding-bottom: 1rem;
  width: 100%;
  max-height: fit-content;

  h3 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.dark200};
    font-size: ${({ theme }) => theme.sizes.md};
    font-weight: 600;
    /* padding-bottom: 1rem;*/
    margin-bottom: 2rem;
  }

  label {
    text-transform: capitalize;
    white-space: pre;
  }

  .plan-content {
    display: none;
  }

  .active-content {
    display: block;
    min-height: 200px;
  }
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  max-width: 396px;
  height: 50px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  overflow: hidden;
  box-shadow: 0px 2px 2px 0 rgba(187, 204, 221, 0.4);
  margin-bottom: 2.375rem;

  .group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.radius.sm};
  }

  label {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0 1rem;
    cursor: pointer;
  }
  /*   
  div {
    width: 50%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.dark200};
    cursor: pointer;
  } */

  label:nth-child(2n) {
    border-left: 2px solid ${({ theme }) => theme.colors.light100};
    border-right: 2px solid ${({ theme }) => theme.colors.light100};
  }

  .active-tab {
    background-color: ${({ theme }) => theme.colors.light200};
  }
`;
