import { FC } from 'react'
import styled from 'styled-components'

const ButtonBackground = require('../assets/img/DarkButtonBackground.png')

const OpenProposalStyles = styled.div`
    .open-proposal__container {
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
        padding: 3rem;

        .proposal__content {
            height: 350px;
            overflow-y: scroll;

            h1 {
                margin-bottom: 3rem;
                font-size: 4rem;
            }

            h3 {
                margin-bottom: 2rem;
                font-size: 2.5rem;
            }

            p {
                font-size: 1.5rem;
            }
        }

        .button__container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 5rem;
            margin-top: 2.5rem;
        }

        .vote__button-container {
            display: flex;
            align-items: center;
            justify-content: center;

            .vote__button {
                background: url(${ButtonBackground});
                background-repeat: no-repeat;
                background-size: 100% 100%;
                padding: 1.5rem;
                border-radius: 10%;
                user-select: none;
				cursor: pointer;
				transition: .3s ease-in-out;

				&:hover {
					font-size: 90%;
				}
            }
        }

        .show__vote-button {
            background: gray;
            padding: 1.5rem;
            border-radius: 10%;
            user-select: none;
        }
    }
`

const OpenProposal: FC<any> = ({ subject, text }) => {
    let decision

    const decideProposal = (decided:boolean) => {
        console.log(decided)
    }
    
    return (
        <OpenProposalStyles>
            <div className="open-proposal__container">
                <div className="proposal__content">
                    <h3>{subject}</h3>
                    <p>{text}</p>
                </div>

                <div className="button__container">
                    {decision !== null ? (
                        <>
                            <div className="vote__button-container" >
                                <a className="vote__button" onClick={() => decideProposal(true)}>Approve</a>
                            </div>
                            <div className="vote__button-container">
                                <h5 className="vote__button" onClick={() => decideProposal(false)}>Reject</h5>
                            </div>{' '}
                        </>
                    ) : (
                        <>
                            <div className="show__vote">
                                <h5 className="show__vote-button">{decision ? 'Accepted' : 'Rejected'}</h5>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </OpenProposalStyles>
    )
}

export default OpenProposal
