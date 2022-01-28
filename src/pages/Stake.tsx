import styled from 'styled-components'
import BluredCard from '../Components/BluredCard'

import Button from '../Components/Button'
import SectionTitle from '../Components/SectionTitle'

const logo = require('../assets/img/logoDark.png')

const StakeStyles = styled.div`
    .stake__form {
        margin: 3rem;
        margin-bottom: 0;

        .stake__form-input__container {
            margin-bottom: 1rem;

            .stake__form-input__title {
                font-size: 0.8rem;
                margin-bottom: 1rem;
            }

            .stake__form-input {
                width: 100%;
                height: 2rem;
                border-radius: 0.5rem;
                padding: 0 3rem;
                background: url(${logo}) no-repeat left;
                background-position-x: 1rem;
                background-size: 20px;
                background-color: white;
            }

            .stake__form-submit__container * {
                color: black;
            }
        }
    }

    .stake__statistics {
        margin: 3rem;

        .stake__statistics-title {
            text-align: center;
            font-size: 1.25rem;
            margin-bottom: 1rem;
        }

        .stake__statistics-container {
            width: 100%;
            height: 100%;
            background: white;
            border-radius: 1rem;
            padding: 0.25rem;

            .stake__statistic-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.6rem 2rem;
                color: black;
            }
        }
    }
`

const Stake = () => {
    return (
        <StakeStyles>
            <section className="stake__section">
                <SectionTitle>STAKE VICE CITY COIN</SectionTitle>

                <BluredCard>
                    <form className="stake__form" method="POST">
                        <div className="stake__form-input__container">
                            <h3 className="stake__form-input__title">STAKE</h3>
                            <input type="text" name="" id="" className="stake__form-input" placeholder="Amount" />
                        </div>
                        <div className="stake__form-input__container">
                            <h3 className="stake__form-input__title">UNSTAKE</h3>
                            <input type="text" name="" id="" className="stake__form-input" placeholder="Amount" />
                        </div>
                        <div className="stake__form-submit__container">
                            <Button textColor="black" lightButton>
                                Connect Wallet
                            </Button>
                        </div>
                    </form>

                    <div className="stake__statistics">
                        <h2 className="stake__statistics-title">VICE CITY COIN STATISTICS</h2>

                        <div className="stake__statistics-container">
                            <div className="stake__statistic-item">
                                <h6 className="stake__statistic">Annual Percentage Rate</h6>
                                <h6 className="stake__statistic-value">5.89%</h6>
                            </div>
                            <div className="stake__statistic-item">
                                <h6 className="stake__statistic">Total Staked</h6>
                                <h6 className="stake__statistic-value">305 VCC</h6>
                            </div>
                            <div className="stake__statistic-item">
                                <h6 className="stake__statistic">Stakers</h6>
                                <h6 className="stake__statistic-value">35</h6>
                            </div>
                            <div className="stake__statistic-item">
                                <h6 className="stake__statistic">VCC Market Cap</h6>
                                <h6 className="stake__statistic-value">$278.94</h6>
                            </div>
                        </div>
                    </div>
                </BluredCard>
            </section>
        </StakeStyles>
    )
}

export default Stake
