import styled from 'styled-components';
import LinearProgress from '@mui/material/LinearProgress';

export const Wrapper = styled.div`
    background: linear-gradient(to right, ${({ theme }) => theme.mainDark}, ${({ theme }) => theme.mainLight});
    color: #1c1c1c;
    padding: 5px;
    margin: 0 0 10px 0;
    font-size: 0.8em;
    display: flex;
    border-radius: 5px;
    flex-direction: row;
    justify-content: space-around;
`;

const ItemElement =  styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
`
export const Name = styled(ItemElement)`
`;

export const Amount = styled(ItemElement)`
`;

export const ProgressBox = styled(ItemElement)`
    align-items: center;
`;

export const ProgressBar = styled(LinearProgress)`
    margin-left: 3%;
    width: 100%;
    background-color: black !important;
    &>span{
      background-color: ${({ theme }) => theme.dangerColor} !important;
    }
`;

export const Price = styled(ItemElement)`
`;
