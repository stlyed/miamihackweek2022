import { FC } from 'react'
import styled from 'styled-components'
import Button from './Button'

const ProposalItemStyles = styled.div`
    .proposal__item {
        background: #010220;
        border-radius: .5rem;
        padding: .5rem 1rem;

        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
`

const ProposalItem: FC<any> = proposal => {
    return (
        <ProposalItemStyles>
            <div className="proposal__item">
                <div>
                    <span>
                        {proposal.proposal.name} : {proposal.proposal.subject}
                    </span>
                    <Button>{proposal.proposal.status ? 'Vote' : 'already voted'}</Button>
                </div>
            </div>
        </ProposalItemStyles>
    )
}

export default ProposalItem
