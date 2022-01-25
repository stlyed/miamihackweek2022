import styled from 'styled-components';
import solana from '../../Images/Solana.svg'

import Vault from "../../Images/vault.png";
import DiscordImage from "../../Images/discord.svg";

export const FooterSection = styled.nav`
  display: flex;
  margin: auto;
  flex: 0.2 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.secondaryColor};
  min-height: 3.5rem;
  width: 100%;
  //background-color: ${({ theme }) => theme.mainColor};
  
  & #icon {
    background-color: red;
    fill: red;
  }
`;

export const NameSection = styled.div`
  font-size: 2em;
`;

export const Solana = styled.a`
  width: 100px;
  height: 40px;
  background-image: url("${solana}");
  background-repeat: no-repeat;
`;

export const LinksSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  &>*{margin: 0 10px}
`;

export const MediaLink = styled.img`
  background-size: auto;
  width: 50px;
  height: 50px;
`;

export const Discord = styled(MediaLink)`
  background-image: url("${DiscordImage}");
  fill: red;
`


