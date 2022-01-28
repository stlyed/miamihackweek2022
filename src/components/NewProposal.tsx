import { FC, useState } from 'react'
import styled from 'styled-components'
import { addProposalToDB } from '../data/Proposals'

const background = require('../assets/img/DarkButtonBackground.png')

const NewProposalStyles = styled.div`
    .new-proposal__container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 610px;
        width: 60vw;
        background: #1f055c;
        z-index: 1;
        border-radius: 3rem;
        text-align: center;

        .new-proposal__title {
            font-size: 3rem;
            margin: 2.75rem 0;
        }

        .new-proposal__form {
            display: flex;
            flex-direction: column;
            gap: 2rem;

            .proposal__input {
                width: 80%;
                height: 3rem;
                padding: 0 1rem;
                border-radius: 0.75rem;
            }

            .proposal__input-text {
                padding: 1rem;
                border-radius: 0.75rem;
                width: 80%;
                resize: none;
                font-family: 'Tenor Sans', sans-serif;
                font-size: 1.25rem;
            }

            .proposal__submit-container {
                display: flex;
                align-items: center;
                justify-content: center;

                .submit__proposal {
                    background: none;
                    background-image: url('${background}');
                    background-size: cover;
                    background-position: right bottom;
                    padding: 0.5rem;
                    border-radius: 0.3rem;
                    color: white;
                    cursor: pointer;
                    font-size: 1.5rem;
                }
            }
        }
    }
`

const NewProposal: FC<any> = ({ proposal }) => {
    const [proposalSubject, setProposalSubject] = useState('')
    const [proposalText, setProposalText] = useState('')

    /**
     * add new proposal to proposal to database
     */
    const newProposal = () => {
        const date = new Date('2010-10-11T00:00:00+05:30')
        const today =
            (date.getMonth() > 8 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)) +
            '/' +
            (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) +
            '/' +
            date.getFullYear()
        const nextYear = new Date().getFullYear()

        const data = {
            name: proposalSubject,
            subject: proposalSubject,
            text: proposalText,
            status: 'active',
            start_date: today,
            end_date: today.substring(4, 2) + (nextYear + 1).toString(),
        }


        // @ts-ignore
        const proposalDecisions = JSON.parse(localStorage.getItem('proposals'))
        proposalDecisions.push(data)
        localStorage.setItem('proposals', JSON.stringify(proposalDecisions))
        
        addProposalToDB(data)
    }
    
    return (
        <NewProposalStyles>
            <div className="new-proposal__container">
                <h1 className="new-proposal__title">New Proposal</h1>
                <form
                    className="new-proposal__form"
                    onSubmit={e => {
                        // create a new proposal if all the fields have something else do nothing
                        if (proposalSubject && proposalText) {
                            newProposal()
                        } else {
                            e.preventDefault()
                        }
                    }}
                >
                    <div className="proposal__input-container">
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Subject"
                            className="proposal__input"
                            onChange={e => setProposalSubject(e.target.value)}
                        />
                    </div>
                    <div className="proposal__input-container">
                        <textarea
                            onChange={e => setProposalText(e.target.value)}
                            className="proposal__input-text"
                            name=""
                            id=""
                            cols={parseInt('74')}
                            rows={parseInt('10')}
                            placeholder="Proposal"
                        ></textarea>
                    </div>
                    <div className="proposal__submit-container">
                        <div className="proposal__submit">
                            <input type="submit" value="Send Proposal" className="submit__proposal" />
                        </div>
                    </div>
                </form>
            </div>
        </NewProposalStyles>
    )
}

export default NewProposal
