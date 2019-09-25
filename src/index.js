import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'
import { render } from 'react-dom'
import App from './App'

import { register as registerServiceWorker } from './utils/serviceWorker'

import './styles/index.css'

// eslint-disable-next-line no-undef
const rootElement = document.getElementById('root')

render(<App />, rootElement)

registerServiceWorker()
