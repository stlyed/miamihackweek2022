import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

if (!localStorage.getItem('proposals')) {
    localStorage.setItem('proposals', '[]')
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
