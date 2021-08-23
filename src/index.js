import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import App from './pages/App';

import ThemeApp from './utils/ThemeApp'

ReactDOM.render(
    <ThemeApp>
        <App />
    </ThemeApp>,
    document.getElementById('root')
)
