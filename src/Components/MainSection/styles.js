import styled from 'styled-components';
import Button from "../Styles/Button";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 2 0 auto;
  background-color: ${({ theme }) => theme.mainColor};
`;

export const RightWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.secondaryColor};
  font-size: 2em;
  padding: 2%;
  margin: 0 6% 3% 6%;
  border-radius: 15px;
  flex: 1 0 72%;
`;

export const CollectionSection = styled.div`
`;

export const LockSection = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.mainColor};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const LockInfo = styled.div`
  margin: 2%;
  display: flex;
  align-items: center;
  flex-grow: 0.7;
  color: ${({ theme }) => theme.dangerColor};
  font-size: 1.5em;
`;

export const LockButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0.3;
`;

export const LockButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.mainDark} !important;
  background-color: #1d1a15 !important;
  color: ${({ theme }) => theme.mainLight} !important;
  font-weight: 600 !important;
`;

export const Name = styled.div`
  margin: 2%;
`

export const SectionName = styled.div`
  margin: 0 0 1% 0;
`

export const CollectionHeadings = styled.div`
  padding: 5px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const CollectionHeading = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
`


