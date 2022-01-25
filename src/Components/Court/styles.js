import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.mainLight};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 88%;
  padding: 0 3%;
  margin: 15px 0;
  //&>*{
  //  align-items: end;
  //}
  //&>*:nth-child(1){
  //  width: 30%;
  //}
  //&>*:nth-child(2){
  //   width: 30%;
  //}
  //&>*:nth-child(3){
  //  width: 40%;
  //}
`;

export const Amount = styled.div`
  font-size: 1.2em;
`;



