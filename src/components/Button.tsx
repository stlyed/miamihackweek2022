import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const lightBackground = require('../assets/img/buttonBackground.png')
const darkbackground = require('../assets/img/DarkButtonBackground.png')

const ButtonStyles = styled.div`
    .button__container {
        background-size: cover;
        background-position: right bottom;
        padding: 0.5rem;
        border-radius: 0.3rem;
        text-align: center;
    }
`

const Button: FC<any> = ({ children, lightButton = false, link = '#', textColor = 'white' }) => {
    return (
        <ButtonStyles>
            <div
                className="button__container"
                style={{
                    backgroundImage: `url(${lightButton ? lightBackground : darkbackground})`,
                }}
            >
                <Link to={link}>
                    <h5 className="button" style={{ color: textColor }}>
                        {children}
                    </h5>
                </Link>
            </div>
        </ButtonStyles>
    )
}

export default Button
