import React from 'react'
import { Table, Tbody, Thead } from 'react-super-responsive-table'
import { withRouter } from 'react-router'
import { instanceOf } from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

import FeedRow from './components/FeedRow'
import FeedHeader from './components/FeedHeader'

import rowData from './data/mock-data'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import './feed.css'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
}))

function Feed({ history }) {
  const { root } = useStyles()
  return (
    <Paper className={root}>
      <Table>
        <Thead>
          <FeedHeader />
        </Thead>
        <Tbody>
          {rowData.map(({ name, ...rest }) => (
            <FeedRow key={name} history={history} name={name} {...rest} />
          ))}
        </Tbody>
      </Table>
    </Paper>
  )
}

Feed.propTypes = {
  history: instanceOf(Object).isRequired,
}

export default withRouter(Feed)
