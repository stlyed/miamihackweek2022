import { useState } from 'react'
import styled from 'styled-components'

import proposalsSample from '../data/Proposals'
import BluredCard from '../components/BluredCard'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'
import ProposalItem from '../components/ProposalItem'

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
        }
    }
	.proposal__list {
		max-height: 400px;
		overflow-y: scroll;

		&::-webkit-scrollbar {
			width: 0;
			background: transparent;
		}
	}
	.proposal__item__container {
		margin-bottom: 1rem;
	}
`

const Dao = () => {
    const [activeView, setActiveView] = useState(true)

    return (
        <DaoStyles>
            <section className="dao__section">
                <SectionTitle>DAO PORTAL: PROPOSALS</SectionTitle>

                <BluredCard>
                    <div className="proposals">
                        <Button>NEW PROPOSAL</Button>

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
                            {proposalsSample.map(proposal => (
                                <>
                                    <div className="proposal__item__container">
                                        <ProposalItem proposal={proposal} />
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </BluredCard>
            </section>
        </DaoStyles>
    )
}

export default Dao
