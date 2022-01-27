import { FC } from 'react'
import styled from 'styled-components'

const BluredCardStyles = styled.div`
    .card {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, calc(-38% - 0.5px));
        height: 510px;
        width: 35vw;
        border: 1px solid #c4c4c4;
        border-radius: 2rem;
        background: rgb(44, 42, 42);
        background-color: rgba(255, 255, 255, 0.15) !important;
        backdrop-filter: blur(15px) !important;
    }
    
    @media screen and (max-width: 1165px) {
        .card {
            width: 80vw;
            height: 100vh;
        }
    } 
`

const BluredCard: FC = ({ children }) => {
    return (
        <BluredCardStyles>
            <div className="card">{children}</div>
        </BluredCardStyles>
    )
}

export default BluredCard
