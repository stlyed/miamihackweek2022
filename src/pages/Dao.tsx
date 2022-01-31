import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { getAllProposalsFromDB } from '../data/Proposals'
import BluredCard from '../Components/BluredCard'
import Button from '../Components/Button'
import SectionTitle from '../Components/SectionTitle'
import ProposalItem from '../Components/ProposalItem'
import NewProposal from '../Components/NewProposal'
import ClosePopup from '../Components/ClosePopup'

const background = require('../assets/img/DarkButtonBackground.png')

const DaoStyles = styled.div`
    .proposals {
        margin: 3rem;
    }

    .change__view-button__container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        width: 33px;
        margin: 2rem 0;

        .active {
            background-image: url('${background}');
            background-size: cover;
            background-position: center bottom;
            padding: 0.5rem;
            border-radius: 1rem;
            text-align: center;
        }

        .button {
            cursor: pointer;
            user-select: none;
        }
    }
    .proposal__list {
        max-height: 290px;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            width: 0;
            background: transparent;
        }
    }
    .proposal__item__container {
        margin-bottom: 1rem;
    }

    .hide__popup {
        display: none;
    }
`

const Dao = () => {
    const [proposalList, setProposalList] = useState([])
    const [activeView, setActiveView] = useState(true)
    const [showCreateProposal, setShowCreateProposal] = useState('hide__popup')

    const ref = useRef(null)
    ClosePopup(ref, () => setShowCreateProposal('hide__popup'))

    // Get proposals from the database
    useEffect(() => {
        getAllProposalsFromDB().then(data => {
            setProposalList(data)
            if (localStorage.getItem('proposals') === "[]") {
                localStorage.setItem('proposals', JSON.stringify(data))
            }
        })
    }, [])

    return (
        <DaoStyles>
            <section className="dao__section">
                {/* new proposal popup */}
                <div className={showCreateProposal} ref={ref}>
                    <NewProposal></NewProposal>
                </div>

                <SectionTitle>DAO PORTAL: PROPOSALS</SectionTitle>
                <BluredCard>
                    <div className="proposals">
                        <div onClick={() => setShowCreateProposal('')}>
                            <Button ids={'newProposal'}>NEW PROPOSAL</Button>
                        </div>

                        <div className="change__view-button__container">
                            <h3
                                className={activeView ? 'button active' : 'button'}
                                onClick={() => setActiveView(!activeView)}
                            >
                                ACTIVE
                            </h3>
                            <h3
                                className={activeView ? 'button' : 'button active'}
                                onClick={() => setActiveView(!activeView)}
                            >
                                CLOSED
                            </h3>
                        </div>

                        <div className="proposal__list">
                            {proposalList.map((proposal: any) => {
                                if (activeView && proposal.status === 'active') {
                                    return (
                                        <div className="proposal__item__container" key={proposal._id}>
                                            <ProposalItem proposal={proposal} />
                                        </div>
                                    )
                                } else if (!activeView && proposal.status === 'closed') {
                                    return (
                                        <div className="proposal__item__container" key={proposal._id}>
                                            <ProposalItem proposal={proposal} />
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </BluredCard>
            </section>
        </DaoStyles>
    )
}

export default Dao
