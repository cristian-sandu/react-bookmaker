import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'
import { render } from 'react-dom'
import { AppProvider } from 'common/providers'

import { register } from './utils/serviceWorker'
import './styles/index.css'

// eslint-disable-next-line no-undef
render(<AppProvider />, document.getElementById('root'))

register()
