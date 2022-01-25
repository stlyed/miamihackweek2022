import styled from "styled-components";

import {Modal, Typography} from "@mui/material";
import {ButtonGroup, GoldenBoldText, StyledBox, TextSection, ProposalInput} from "./styles";
import DarkButton from "../../../Components/Styles/DarkButton";

function ModalComponent({open, handleClose, data, type}) {

    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClose={handleClose}
        >
            <StyledBox>
                {type === "new" ?
                    <>
                        <GoldenBoldText>New proposal</GoldenBoldText>
                        <ProposalInput type="text" size="40"/>
                        <TextSection>What is your proposal?</TextSection>
                        <DarkButton>Send</DarkButton>
                    </> :
                    <>
                        <GoldenBoldText id="modal-modal-title" variant="h6" component="h2">
                            {data.name}
                        </GoldenBoldText>
                        <TextSection>
                            {data.text}
                        </TextSection>
                        <ButtonGroup>
                            <DarkButton>Approve</DarkButton>
                            <DarkButton>Reject</DarkButton>
                        </ButtonGroup>
                    </>
                }
            </StyledBox>
        </Modal>
    );
}

export default ModalComponent;
