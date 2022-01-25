import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Info from '../../Images/info.png';
import Treasury from '../../Images/treasury.png';
import Tourn from '../../Images/tourn.png';
import Scale from '../../Images/scale.png';
import Vault from '../../Images/vault.png';

export const SidePanelSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  min-height: 3.5rem;
`;

export const SideBar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;
  height: auto;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-left: none;
  border-radius: 0 10px 10px 0;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.secondaryColor};
  min-height: 3.5rem;
`;

export const StyledNavLink = styled(NavLink)`
  background-size: contain;
  margin: 1em 0;
  width: 5em;
  max-width: 50px;
  height: 5em;
  max-height: 50px;
`;

export const SwitchToVault = styled(StyledNavLink)`
  background-image: url("${Vault}");
`

export const SwitchToScale = styled(StyledNavLink)`
  background-image: url("${Scale}");
`

export const SwitchToTournament = styled(StyledNavLink)`
  background-image: url("${Tourn}");
`

export const SwitchToTreasury = styled(StyledNavLink)`
  background-image: url("${Treasury}");
`

export const SwitchToInfo = styled(StyledNavLink)`
  background-image: url("${Info}");
  cursor: not-allowed;
`
