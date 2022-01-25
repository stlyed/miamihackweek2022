import {
    Switch,
    Route,
} from "react-router-dom";
import {
    Wrapper,
    RightWrapper,
    SectionName,
    CollectionHeadings,
    CollectionHeading,
    LockInfo,
    LockButtonSection,
    LockSection,
    CollectionSection,
    Name,
    LockButton
} from './styles';

import SidePannel from '../SidePanel';
import DefaultPage from '../../Pages/Default';
import CollectionItem from '../CollectionItem';
import Treasury from "../../Pages/Treasury";
import Governance from "../../Pages/Governance";
import Tournament from "../../Pages/Tournament";

function MainSection() {
    return (
        <Wrapper>
            <SidePannel/>
            <RightWrapper>
                <Switch>
                    <Route exact path="/">
                        <DefaultPage />
                    </Route>
                    <Route path="/treasury">
                        <Treasury/>
                    </Route>
                    <Route path="/governance">
                        <Governance/>
                    </Route>
                    <Route path="/tournament">
                        <Tournament/>
                    </Route>
                    <Route path="/">
                        Coming soon!
                    </Route>
                </Switch>
            </RightWrapper>
        </Wrapper>
    );
}

export default MainSection;
