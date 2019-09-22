import React from 'react'
import { instanceOf, string } from 'prop-types'
import { Typography } from '@material-ui/core'

import './styles.css'

function PageTitle({ title, style }) {
  return (
    <div className="page-title" style={style}>
      <Typography variant="h4">{title}</Typography>
    </div>
  )
}

PageTitle.propTypes = {
  style: instanceOf(Object),
  title: string.isRequired,
}

PageTitle.defaultProps = {
  style: {},
}

export default PageTitle
