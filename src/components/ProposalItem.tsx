import { FC, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import ClosePopup from './ClosePopup'
import OpenProposal from './OpenProposal'

const ProposalItemStyles = styled.div`
    .proposal__item {
        background: #010220;
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;

        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    .hide__popup {
        display: none;
    }
`

const ProposalItem: FC<any> = proposal => {
    const [showOpenProposal, setshowOpenProposal] = useState('hide__popup')
    const ref = useRef(null);
    ClosePopup(ref, () => setshowOpenProposal('hide__popup'));

    useEffect(() => {
        
        // localStorage.setItem("proposals", JSON.stringify([]));
    }, [])

    return (
        <ProposalItemStyles>
            <div className={showOpenProposal} ref={ref} >
                <OpenProposal
                    name={proposal.proposal.name}
                    subject={proposal.proposal.subject}
                    text={proposal.proposal.text}
                ></OpenProposal>
            </div>

            <div className="proposal__item">
                <div>
                    <span>
                        {proposal.proposal.name} : {proposal.proposal.subject}
                    </span>
                    <div onClick={() => setshowOpenProposal('')}>
                        <Button>{proposal.proposal.status === 'active' ? 'Vote' : 'View'}</Button>
                    </div>
                </div>
            </div>
        </ProposalItemStyles>
    )
}

export default ProposalItem
