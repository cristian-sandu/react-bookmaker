import React from 'react'
import { CircularProgress } from '@material-ui/core'

import './loading.css'

const Loading = () => (
  <CircularProgress className="bookmaker__loading" size={50} />
)

export default Loading
