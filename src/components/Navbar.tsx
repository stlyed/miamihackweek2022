import styled from 'styled-components'
import Button from './Button'
import { NavLink } from 'react-router-dom'

const logo = require('../assets/img/logo.png')
const wallet = require('../assets/img/wallet.png')
const light = require('../assets/img/light.png')

const NavbarStyles = styled.div`
    .navbar__container,
    .navbar__column,
    .navlink,
    .navbar__right,
    .navbar__item-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .navbar__container {
        padding: 1rem 0;
    }

    .navbar__column {
        flex: 1 1 0px;
    }

    .navbar__middle {
        gap: 3rem;
    }

    .navbar__logo {
        height: 30px;
        width: auto;
        margin-right: 0.5rem;
    }

    .navbar__item-icon {
        height: 30px;
        width: auto;
        margin-right: 0.5rem;
    }
`

const Navbar = () => {
    return (
        <NavbarStyles>
            <nav className="navbar__container">
                <div className="navbar__left navbar__column">
                    <NavLink to={'/'} className="navlink">
                        <img src={logo} alt="" className="navbar__logo" />
                        <h3 className="navbar__title">VICE CITY COIN</h3>
                    </NavLink>
                </div>

                <div className="navbar__middle navbar__column">
                    <div className="navbar__item-container">
                        <NavLink className="navlink" to={'/stake'}>
                            <img src={wallet} alt="" className="navbar__item-icon" />
                            <h4 className="nabar__item">STAKE</h4>
                        </NavLink>
                    </div>
                    <div className="navbar__item-container ">
                        <NavLink className="navlink" to={'/dao'}>
                            <img src={light} alt="" className="navbar__item-icon" />
                            <h4 className="nabar__item">DAO</h4>
                        </NavLink>
                    </div>
                </div>

                <div className="navbar__right navbar__column">
                    <Button classes="navbar__item-right">Connect Wallet</Button>
                </div>
            </nav>
        </NavbarStyles>
    )
}

export default Navbar
