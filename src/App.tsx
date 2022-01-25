import './App.css'
import { useMemo, useState } from 'react'

import Home from './Home'
import { BrowserRouter as Router } from 'react-router-dom'

import * as anchor from '@project-serum/anchor'
import { clusterApiUrl } from '@solana/web3.js'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import {
    getPhantomWallet,
    getSlopeWallet,
    getSolflareWallet,
    getSolletWallet,
    getSolletExtensionWallet,
} from '@solana/wallet-adapter-wallets'

import {
    ConnectionProvider,
    WalletProvider,
} from '@solana/wallet-adapter-react'

import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui'
import {
    createTheme,
    ThemeProvider as MaterialUIThemeProvider,
} from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, darkTheme, lightTheme } from './GlobalStyles'

import logo from './Images/un.png'

const treasury = new anchor.web3.PublicKey(
    process.env.REACT_APP_TREASURY_ADDRESS!
)

const config = new anchor.web3.PublicKey(
    process.env.REACT_APP_CANDY_MACHINE_CONFIG!
)

const candyMachineId = new anchor.web3.PublicKey(
    process.env.REACT_APP_CANDY_MACHINE_ID!
)

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!
const connection = new anchor.web3.Connection(rpcHost)

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10)

const txTimeout = 30000 // milliseconds (confirm this works for your project)

const materialTheme = createTheme({
    palette: {
        text: {
            primary: '#fff',
        },
        primary: {
            main: '#302924',
        },
        grey: {
            500: 'white',
            900: '#9b8874',
        },
    },
})

const App = () => {
    const [theme, setTheme] = useState<string>('dark')
    console.log('theme', theme)
    const endpoint = useMemo(() => clusterApiUrl(network), [])
    const changeTheme = () =>
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    const wallets = useMemo(
        () => [
            getPhantomWallet(),
            getSlopeWallet(),
            getSolflareWallet(),
            getSolletWallet({ network }),
            getSolletExtensionWallet({ network }),
        ],
        []
    )

    return (
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <MaterialUIThemeProvider theme={materialTheme}>
                <GlobalStyles theme={theme} />
                <ConnectionProvider endpoint={endpoint}>
                    <WalletProvider wallets={wallets} autoConnect={true}>
                        {/*
              // @ts-ignore */}
                        <WalletDialogProvider color="neutral">
                            <Router>
                                <Home
                                    theme={theme}
                                    changeTheme={changeTheme}
                                    candyMachineId={candyMachineId}
                                    config={config}
                                    connection={connection}
                                    startDate={startDateSeed}
                                    treasury={treasury}
                                    txTimeout={txTimeout}
                                />
                            </Router>
                        </WalletDialogProvider>
                    </WalletProvider>
                </ConnectionProvider>
            </MaterialUIThemeProvider>
        </ThemeProvider>
    )
}

export default App
