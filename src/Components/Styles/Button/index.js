import styled from "styled-components";
import {WalletDialogButton} from "@solana/wallet-adapter-material-ui";

const Button = styled(WalletDialogButton)`
  & .MuiButton-label {
    text-align: center !important;
  }
  text-align: center !important;
  color: ${({ theme }) => theme.mainColor} !important;
  border: 3px solid ${({ theme }) => theme.iconColor} !important;
  background-color: ${({ theme }) => theme.iconColor} !important;
  & .MuiButton-label {
    flex-direction: column;
  }
  font-family: Futura,Trebuchet MS,Arial,sans-serif !important;
`;

export default Button
