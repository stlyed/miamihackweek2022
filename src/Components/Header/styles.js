import styled from 'styled-components';

import Logo from '../../Images/un.png'
import Text from '../../Images/daosociety.png'

export const HeaderSection = styled.div`
  flex: 0.2 0 auto;
  display: flex;
  margin: auto;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.main};
  min-height: 3.5rem;
  width: 100%;
  align-items: center;
`;

export const NameSection = styled.div`
  display: flex;
  font-size: 2em;
  align-items: center;
`;

export const LogoImage = styled.image`
  background-image: url("${Logo}");
  margin-left: 10px;
  background-size: contain;
  width: 2em;
  height: 2em;
`;

export const LogoText = styled.image`
  background-image: url("${Text}");
  background-size: contain;
  width: 8em;
  height: auto;
`;

