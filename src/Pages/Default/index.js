import {
    SectionName,
    CollectionHeadings,
    CollectionHeading,
    LockInfo,
    LockButtonSection,
    LockSection,
    CollectionSection
} from './styles';

import CollectionItem from '../../Components/CollectionItem';
import LockButton from '../../Components/Styles/DarkButton';

function MainSection() {
    return (
            <>
                <SectionName>
                    Doll NFT
                </SectionName>
                <LockSection>
                    <LockInfo>
                        Total locked supply
                        <br/>
                        500/900
                    </LockInfo>
                    <LockButtonSection>
                        <LockButton>LOCK DOLLS</LockButton>
                    </LockButtonSection>
                </LockSection>
                <CollectionSection>
                    <CollectionHeadings>
                        <CollectionHeading>Name</CollectionHeading>
                        <CollectionHeading>Total mint</CollectionHeading>
                        <CollectionHeading></CollectionHeading>
                        <CollectionHeading>TVL</CollectionHeading>
                    </CollectionHeadings>
                    <CollectionItem props={{name: 'name', amount: 5, percentage: 50, price: 100}}/>
                </CollectionSection>
            </>
    );
}

export default MainSection;
