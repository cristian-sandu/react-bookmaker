import React from 'react'
import { Table, Tbody, Thead } from 'react-super-responsive-table'
import { withRouter } from 'react-router'
import { instanceOf, bool } from 'prop-types'
import { isMobileOnly } from 'react-device-detect'

import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

import FeedRow from './components/FeedRow'
import FeedHeader from './components/FeedHeader'
import { onlineData, offlineData } from './data/row-data'

import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import './feed.css'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
}))

function Feed({ history, isOnline }) {
  const { root } = useStyles()
  const feedData = isOnline ? onlineData : offlineData

  return (
    <Paper className={root}>
      <Table className="table__spacing">
        {!isOnline && (
          <Thead>
            <FeedHeader />
          </Thead>
        )}
        <Tbody>
          {feedData.map(({ name, ...rest }) => (
            <FeedRow
              isOnline={isOnline}
              isMobile={isMobileOnly}
              key={name}
              history={history}
              name={name}
              {...rest}
            />
          ))}
        </Tbody>
      </Table>
    </Paper>
  )
}

Feed.propTypes = {
  history: instanceOf(Object).isRequired,
  isOnline: bool.isRequired,
}

export default withRouter(Feed)
