import React from 'react'
import { number } from 'prop-types'

const DIMENSION = 30
const START_POSITION = '0px'
const VIEW_BOX = '0 0 512 512'

const backgroundStyle = { fill: '#1976D2' }
const contentStyle = { fill: '#FAFAFA' }
const svgStyle = { marginLeft: 10 }

const backgroundData =
  'M448,0H64C28.704,0,0,28.704,0,64v384c0,35.296,28.704,64,64,64h384c35.296,0,64-28.704,64-64V64C512,28.704,483.296,0,448,0z'
const contentData =
  'M432,256h-80v-64c0-17.664,14.336-16,32-16h32V96h-64l0,0c-53.024,0-96,42.976-96,96v64h-64v80h64v176h96V336h48L432,256z'

const Facebook = ({ size }) => (
  <svg
    height={size}
    width={size}
    x={START_POSITION}
    y={START_POSITION}
    viewBox={VIEW_BOX}
    style={svgStyle}
  >
    <path style={backgroundStyle} d={backgroundData} />
    <path style={contentStyle} d={contentData} />
  </svg>
)

Facebook.propTypes = {
  size: number,
}

Facebook.defaultProps = {
  size: DIMENSION,
}

export default Facebook
