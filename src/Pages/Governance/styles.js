import styled from 'styled-components';

export const TextSection = styled.div`
`;

export const SectionName = styled.div`
  margin: 0 5% 1% 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const GoldenBoldText = styled.div`
  color: ${({ theme }) => theme.mainLight};
  font-weight: 600;
`

export const ProposalSection = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.mainColor};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const ProposalHeadings = styled.div`
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  display: flex;
  flex-direction: row;
`;

export const ProposalHeader = styled.a`
    font-size: 0.5em;
    margin: 1% 3%;
    padding: 0.3% 1%;
    border-radius: 15px;
    ${props => props.active && 
                { "background-color" : props.theme.mainLight,
                  "color" : props.theme.mainColor
                }
                
};
    &:hover{
      cursor: pointer;
    }
`;

export const ProposalsSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
`;

export const Proposal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const ProposalStatus = styled.div`
    margin: 1.5% 3%;
    padding: 0.3% 1%;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.mainLight};
    color: ${({ theme }) => theme.mainColor};
`;

export const ProposalInfo = styled.div`
  width: 100%;
  font-size: 0.7em;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ProposalName = styled.div`
`;

export const ProposalDate = styled.div`
`;


