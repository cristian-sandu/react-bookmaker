import React, { useContext, useMemo } from 'react'
import { Box } from '@material-ui/core'
import { Autorenew } from '@material-ui/icons'
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery'

import FootballBeer from 'assets/png/football-beer.png'
import SiteVersionContext from 'common/contexts/siteVersionContext'
import { SITE_VERSION } from 'common/constants'

import {
  SUBJECT_OFFLINE,
  SUBJECT_ONLINE,
  TITLE_OFFLINE,
  TITLE_ONLINE,
} from './constants'
import './styles.css'

const { ONLINE } = SITE_VERSION

const getCurrentDate = () => {
  const currentDate = new Date()
  const month = `0${currentDate.getMonth() + 1}`.slice(-2)
  const day = `0${currentDate.getDate()}`.slice(-2)
  const year = currentDate.getFullYear()

  return `${day}.${month}.${year}`
}

function SubHeader() {
  const isMobile = useMediaQuery('(max-width: 1024px)')
  const version = useContext(SiteVersionContext)
  const isOnline = useMemo(() => version === ONLINE, [version])
  const date = getCurrentDate()

  return (
    <>
      <div className="subheader_logo-container">
        <Box
          className="subheader_logo"
          flexDirection={isMobile ? 'column' : 'row'}
          style={{
            display: 'inline-flex',
            color: 'white',
            paddingTop: 5,
          }}
        >
          <span>
            <img width="50px" height="100%" src={FootballBeer} alt="Casino" />
          </span>
          <span
            style={{
              paddingLeft: isMobile ? 0 : 20,
              paddingTop: 5,
              fontSize: 29,
              fontWeight: 'bold',
              fontFamily: 'serif',
              lineHeight: '45px',
            }}
          >
            {isOnline ? TITLE_ONLINE : TITLE_OFFLINE}
          </span>
        </Box>
        <Box
          style={{
            color: 'white',
            fontSize: 18,
            paddingTop: 5,
            paddingBottom: 5,
          }}
          flexDirection="row"
        >
          <span>{isOnline ? SUBJECT_ONLINE : SUBJECT_OFFLINE}</span>
        </Box>
      </div>
      <div className="last_updated">
        <Autorenew style={{ color: 'red', marginBottom: -4 }} />
        <span>{`Last Updated: ${date}`}</span>
      </div>
    </>
  )
}

export default SubHeader
