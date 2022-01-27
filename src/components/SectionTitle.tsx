import { FC } from 'react'
import styled from 'styled-components'

const DaoStyles = styled.div`
    .title__container {
        margin-top: 5.5rem;
        text-align: center;

        .title {
            .title {
                font-family: 'Reem Kufi', sans-serif;
            }
        }
    }
`

const Dao: FC = ({ children }) => {
    return (
        <DaoStyles>
            <div className="title__container">
                <h1 className="title">{children}</h1>
            </div>
        </DaoStyles>
    )
}

export default Dao
