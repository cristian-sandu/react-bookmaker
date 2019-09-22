import React from 'react'
import { number } from 'prop-types'

import { CircularProgress } from '@material-ui/core'

const LOADING_DEFAULT_SIZE = 60

const progressStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
}

const Loading = ({ size }) => (
  <CircularProgress style={progressStyle} size={size} />
)

Loading.defaultProps = {
  size: LOADING_DEFAULT_SIZE,
}

Loading.propTypes = {
  size: number,
}

export default Loading
