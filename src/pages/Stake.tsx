import styled from 'styled-components'
import BluredCard from '../components/BluredCard'

import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'

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
                padding: 0 1rem;
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
                padding: 0 2rem;
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
                            <input type="text" name="" id="" className="stake__form-input" />
                        </div>
                        <div className="stake__form-input__container">
                            <h3 className="stake__form-input__title">UNSTAKE</h3>
                            <input type="text" name="" id="" className="stake__form-input" />
                        </div>
                        <div className="stake__form-submit__container">
                            <Button textColor="black" lightButton >Connect Wallet</Button>
                        </div>
                    </form>

                    <div className="stake__statistics">
                        <h2 className="stake__statistics-title">VICE CITY COIN STATISTICS</h2>

                        <div className="stake__statistics-container">
                            <span className="stake__statistic-item">
                                <h6 className="stake__statistic-item">Annual Percentage Rate</h6>
                            </span>
                            <span className="stake__statistic-item">
                                <h6 className="stake__statistic-item">Total Staked</h6>
                            </span>
                            <span className="stake__statistic-item">
                                <h6 className="stake__statistic-item">Stakers</h6>
                            </span>
                            <span className="stake__statistic-item">
                                <h6 className="stake__statistic-item">VCC Market Cap</h6>
                            </span>
                        </div>
                    </div>
                </BluredCard>
            </section>
        </StakeStyles>
    )
}

export default Stake
