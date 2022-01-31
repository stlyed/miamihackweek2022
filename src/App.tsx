import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

import Navbar from './Components/Navbar'
import Dao from './Pages/Dao'
import Stake from './Pages/Stake'

import './index.css'

const background = require('./assets/img/mainBackground.png')

const AppStyles = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: url(${background});
	background-repeat: no-repeat;
	background-size: 100% 100%;
    color: white;
`

const App = () => {
    return (
        <AppStyles>
            <div className="app__container">
                <Router>
                    <main>
                        <header className="header">
                            <Navbar />
                        </header>
                        <Routes>
                            <Route path="/" element={<Stake />} />
                            <Route path="/stake" element={<Stake />} />
                            <Route path="/dao" element={<Dao />} />
                        </Routes>
                    </main>
                </Router>
            </div>
        </AppStyles>
    )
}

export default App
