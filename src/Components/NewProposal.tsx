import { useState } from "react"
import styled from "styled-components"

const NewProposalStyles = styled.div`
    .proposal__container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

const NewProposal = () => {
    const [showPopup, setShowPopup] = useState(true)
    const popupClass = showPopup ? 'proposal__container' : ''
    return (
        <NewProposalStyles>
            <div className={popupClass}></div>
        </NewProposalStyles>
    )
}

export default NewProposal
