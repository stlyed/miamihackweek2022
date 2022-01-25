import styled from "styled-components";
import {Button} from "@mui/material";

const DarkButton = styled(Button)`
  & .MuiButton-label {
    text-align: center !important;
  }
  text-align: center !important;
  & .MuiButton-label {
    flex-direction: column;
  }
  font-family: Futura,Trebuchet MS,Arial,sans-serif !important;
  border: 1px solid ${({ theme }) => theme.mainDark} !important;
  background-color: ${({ theme }) => theme.darkButtonBG} !important;
  color: ${({ theme }) => theme.mainLight} !important;
  font-weight: 600 !important;
`;

export default DarkButton
