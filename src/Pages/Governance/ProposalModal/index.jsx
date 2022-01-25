import styled from 'styled-components'
import { useState } from 'react'

import { Modal, Typography } from '@mui/material'
import { ButtonGroup, GoldenBoldText, StyledBox, TextSection, ProposalInput } from './styles'
import DarkButton from '../../../Components/Styles/DarkButton'
import proposalsSample from '../proposals'

const ModalComponent = ({ open, handleClose, data, type }) => {
    const [proposalName, setProposalName] = useState('')
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

        const nextYear = parseInt(new Date().getFullYear())

        proposalsSample.push({
            name: proposalName,
            text: proposalText,
            status: 'active',
            start_date: today,
            end_date: today.substring(today) + (nextYear + 1).toString(),
        })
    }

    /**
     * handle the uer clicking approve or deny on the proposal
     */
    const decideProposal = (approve = false) => {
        proposalsSample.forEach((value, index) => {
            if (data.name === value.name) {
                proposalsSample[index].status = 'pending'
                proposalsSample[index].decision = approve
            }
        })
    }

    /**
     * Show the buttons to vote on the proposal if the user have not alread,
     *  show what they decieded if they voted already
     */
    const showDecsionButtons = (<>{data.status === 'pending' ? (
        <h3>Your decision on proposal: {data.decision ? 'Approved' : 'Rejected'}</h3>
    ) : (
        <ButtonGroup>
            <DarkButton onClick={() => decideProposal(true)}>Approve</DarkButton>
            <DarkButton onClick={() => decideProposal()}>Reject</DarkButton>
        </ButtonGroup>
    )}</>)

    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClose={handleClose}
        >
            <StyledBox>
                {type === 'new' ? (
                    <>
                        <GoldenBoldText>New proposal</GoldenBoldText>
                        <ProposalInput type="text" size="40" onChange={e => setProposalName(e.target.value)} />
                        <ProposalInput type="text" size="70" onChange={e => setProposalText(e.target.value)} />
                        <TextSection>What is your proposal?</TextSection>
                        <DarkButton onClick={() => newProposal()}>Send</DarkButton>
                    </>
                ) : (
                    <>
                        <GoldenBoldText id="modal-modal-title" variant="h6" component="h2">
                            {data.name}
                        </GoldenBoldText>
                        <TextSection>{data.text}</TextSection>

                        {showDecsionButtons}
                    </>
                )}
            </StyledBox>
        </Modal>
    )
}

export default ModalComponent
