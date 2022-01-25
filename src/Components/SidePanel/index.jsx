import { SidePanelSection, SideBar, SwitchToVault, SwitchToScale, SwitchToTournament, SwitchToTreasury, SwitchToInfo, StyledNavLink } from './styles';

const activeStyle = {
    backgroundColor: '#4c4338',
    marginLeft: '5px',
    borderRadius: '100px',
    // boxShadow: '0 0 10px #c8a98c'
}

function SidePannel(props) {
    return (
        <SidePanelSection>
            <SideBar>
                <SwitchToVault activeStyle={activeStyle} exact to="/"/>
                <SwitchToScale activeStyle={activeStyle} to="/governance"/>
                <SwitchToTournament activeStyle={activeStyle} to="/tournament"/>
                <SwitchToTreasury activeStyle={activeStyle} to="/treasury"/>
                <SwitchToInfo activeStyle={activeStyle} to="/info"/>
            </SideBar>
        </SidePanelSection>
    );
}

export default SidePannel;
