import styled from "styled-components";
import {Box} from "@mui/material";

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 50%;
  background-color: ${({ theme }) => theme.mainColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GoldenBoldText = styled.div`
  margin-top: 1%;
  color: ${({ theme }) => theme.mainLight};
  font-weight: 600;
  font-size: 2em;
`

export const TextSection = styled.div`
  font-size: 1.2em;
  margin: 5% 15%;
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  &>*{
    margin: 0 3% !important;
  }
`

export const ProposalInput = styled.input`
  background-color: ${({ theme }) => theme.mainColor};
  outline: none;
  font-size: 1.2em;
  margin: 5% 15%;
`
