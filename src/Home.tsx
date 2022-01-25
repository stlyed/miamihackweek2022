import { useEffect, useState } from 'react'
import styled from 'styled-components'

import * as anchor from '@project-serum/anchor'

import { LAMPORTS_PER_SOL } from '@solana/web3.js'

import { useAnchorWallet } from '@solana/wallet-adapter-react'
import {
    WalletDialogButton,
    WalletDisconnectButton,
} from '@solana/wallet-adapter-material-ui'

import Header from './Components/Header'
import Footer from './Components/Footer'
import MainSection from './Components/MainSection'

const PageWrapper = styled.div`
    background-color: ${({ theme }) => theme.mainColor};
    color: ${({ theme }) => theme.textColor};
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex: 0 1 auto;
    width: 100%;
    height: 100%;
`

// const PageWrapper = styled.div`
//   background-color: ${({ theme }) => theme.mainColor};;
//   color: ${({ theme }) => theme.textColor};;
//   display: flex;
//   flex-direction: row;
//   width: 100vw;
//   height: 100vh;
// `
//
// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 0 1 auto;
//   width: 100%;
//   height: 100%;
// `

const InfoTab = styled.div`
    border: 1px solid ${({ theme }) => theme.borderColor};
    background-color: ${({ theme }) => theme.secondaryColor};
    margin: 5% 10%;
    border-radius: 15px;
    flex: 1 0 auto;
`

const InfoTextContainer = styled.div`
    width: 25%;
    text-align: center;
    font-size: 1.7em;
`

const InfoText = styled.p`
    align-items: center;
    width: 80%;
`

const ConnectButton = styled(WalletDialogButton)`
    & .MuiButton-label {
        text-align: center !important;
    }
    text-align: center !important;
    color: ${({ theme }) => theme.mainColor} !important;
    //border: 3px solid ${({ theme }) => theme.iconColor} !important;
    // background-color: ${({ theme }) => theme.iconColor} !important;
    background: linear-gradient(
        to top left,
        ${({ theme }) => theme.mainDark},
        ${({ theme }) => theme.mainLight}
    ) !important;
    & .MuiButton-label {
        flex-direction: column;
    }
    font-family: Futura, Trebuchet MS, Arial, sans-serif !important;
`

const DisconnectButton = styled(WalletDisconnectButton)`
    & .MuiButton-label {
        text-align: center !important;
    }
    text-align: center !important;
    color: ${({ theme }) => theme.mainColor} !important;
    //border: 3px solid ${({ theme }) => theme.iconColor} !important;
    // background-color: ${({ theme }) => theme.iconColor} !important;
    background: linear-gradient(
        to top left,
        ${({ theme }) => theme.mainDark},
        ${({ theme }) => theme.mainLight}
    ) !important;
    & .MuiButton-label {
        flex-direction: column;
    }
    font-family: Futura, Trebuchet MS, Arial, sans-serif !important;
`

export interface HomeProps {
    changeTheme: any
    theme: string
    candyMachineId: anchor.web3.PublicKey
    config: anchor.web3.PublicKey
    connection: anchor.web3.Connection
    startDate: number
    treasury: anchor.web3.PublicKey
    txTimeout: number
}

const Home = (props: HomeProps) => {
    const [balance, setBalance] = useState<number>()

    const [alertState, setAlertState] = useState<AlertState>({
        open: false,
        message: '',
        severity: undefined,
    })

    const wallet = useAnchorWallet()

    useEffect(() => {
        ;(async () => {
            if (wallet) {
                const balance = await props.connection.getBalance(
                    wallet.publicKey
                )
                setBalance(balance / LAMPORTS_PER_SOL)
            }
        })()
    }, [wallet, props.connection])

    return (
        <PageWrapper>
            <Header
                ConnectionButton={wallet ? DisconnectButton : ConnectButton}
            />
            <MainSection />
            {/*<Wrapper>*/}
            {/*  <SidePannel/>*/}
            {/*  <InfoTab>*/}
            {/*  </InfoTab>*/}
            {/*</Wrapper>*/}
            <Footer changeTheme={props.changeTheme} theme={props.theme} />
        </PageWrapper>
    )
}

interface AlertState {
    open: boolean
    message: string
    severity: 'success' | 'info' | 'warning' | 'error' | undefined
}

export default Home
