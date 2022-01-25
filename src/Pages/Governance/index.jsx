import {
    SectionName,
    TextSection,
    ProposalSection,
    ProposalsSection,
    ProposalHeadings,
    ProposalHeader,
    GoldenBoldText,
    Proposal,
    ProposalStatus,
    ProposalInfo,
    ProposalName,
    ProposalDate,
} from './styles'

import DarkButton from '../../Components/Styles/DarkButton'
import { useEffect, useState } from 'react'
import ModalComponent from './ProposalModal'

const proposalsSample = [
    {
        name: 'Proposal 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto commodi consequuntur cupiditate error ex id, iure laudantium magnam natus, placeat porro reiciendis rem tempora tempore temporibus vitae. Eligendi, molestias?',
        status: 'active',
        start_date: '05/11/2021',
        end_date: '20/11/2021',
    },
    {
        name: 'Proposal 1',
        text: 'Give lambo to top 5 players',
        status: 'active',
        start_date: '03/11/2021',
        end_date: '10/11/2021',
    },
    {
        name: 'Proposal 0',
        text: 'Make more dolls',
        status: 'closed',
        start_date: '03/10/2021',
        end_date: '10/10/2021',
    },
]

function Governance() {
    const [active, setActive] = useState('all')
    const [activeProposals, setActiveProposals] = useState(proposalsSample)
    const [modalOpen, setModalOpen] = useState(false)
    const [modalData, setModalData] = useState({})
    const [modalType, setModalType] = useState('')
    const openModal = el => {
        setModalType('')
        setModalOpen(true)
        setModalData(el)
    }
    const newProposal = () => {
        setModalType('new')
        setModalOpen(true)
    }

    useEffect(() => {
        if (active === 'all') {
            setActiveProposals(proposalsSample)
        } else {
            const newProposals = proposalsSample.filter(el => el.status === active)
            setActiveProposals(newProposals)
        }
    }, [active])

    return (
        <>
            <SectionName>
                <TextSection>
                    <div>GOVERNANCE PORTAL</div>
                    <GoldenBoldText>PROPOSALS</GoldenBoldText>
                </TextSection>
                <DarkButton onClick={newProposal}>NEW PROPOSAL</DarkButton>
            </SectionName>
            <ProposalSection>
                <ProposalHeadings>
                    <ProposalHeader onClick={() => setActive('all')} active={active === 'all'}>
                        ALL
                    </ProposalHeader>
                    <ProposalHeader onClick={() => setActive('active')} active={active == 'active'}>
                        ACTIVE
                    </ProposalHeader>
                    <ProposalHeader
                        onClick={() => setActive('pending')}
                        active={active === 'pending'}
                    >
                        PENDING
                    </ProposalHeader>
                    <ProposalHeader
                        onClick={() => setActive('closed')}
                        active={active === 'closed'}
                    >
                        CLOSED
                    </ProposalHeader>
                </ProposalHeadings>
                <ProposalsSection>
                    <ModalComponent
                        open={modalOpen}
                        type={modalType}
                        data={modalData}
                        handleClose={() => setModalOpen(false)}
                    />
                    {activeProposals.map(el => (
                        <Proposal onClick={() => openModal(el)}>
                            <ProposalStatus>{el.status}</ProposalStatus>
                            <ProposalInfo>
                                <ProposalName>{el.name}</ProposalName>
                                <ProposalDate>
                                    {el.start_date} - {el.end_date}
                                </ProposalDate>
                            </ProposalInfo>
                        </Proposal>
                    ))}
                </ProposalsSection>
            </ProposalSection>
        </>
    )
}

export default Governance
