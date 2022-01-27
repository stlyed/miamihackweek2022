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
    const ref = useRef(null)
    ClosePopup(ref, () => setshowOpenProposal('hide__popup'))

    const decide = () => {
        // @ts-ignore
        const localProposals = JSON.parse(localStorage.getItem('proposals'))
        
        for (let i = 0; i < localProposals.length; i++) {
            if (localProposals[i]._id === proposal.proposal._id) {
                return localProposals[i].decision
            }
        }
    }

    return (
        <ProposalItemStyles>
            <div className={showOpenProposal} ref={ref}>
                <OpenProposal
                    id={proposal.proposal._id}
                    subject={proposal.proposal.subject}
                    text={proposal.proposal.text}
                    decision={decide()}
                    status={proposal.proposal.status}
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
