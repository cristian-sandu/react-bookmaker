import React, { useMemo } from 'react'
import useToggle from 'react-use-toggle'
import { always, cond, equals, T } from 'ramda'
import { Link } from 'react-router-dom'

import { APP_ROUTES } from 'common/constants'

import { makeStyles } from '@material-ui/core/styles'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import {
  Contacts,
  DirectionsRun,
  Home,
  Menu,
  People,
  Pets,
  Security,
} from '@material-ui/icons'

import { FOOTER_LINKS } from '../../footer/constants'
import { HEADER_LINKS } from '../constants'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})

const { HOME, HORSE_RACING, FOOTBALL } = HEADER_LINKS
const { ABOUT_US, CONTACTS, PRIVACY } = FOOTER_LINKS

const LINKS = [
  {
    title: HOME,
    link: APP_ROUTES.HOME,
  },
  {
    title: HORSE_RACING,
    link: APP_ROUTES.HORSE_RACING,
  },
  {
    title: FOOTBALL,
    link: APP_ROUTES.FOOTBALL,
  },
  {
    title: ABOUT_US,
    link: APP_ROUTES.ABOUT_US,
  },
  {
    title: CONTACTS,
    link: APP_ROUTES.CONTACTS,
  },
  {
    title: PRIVACY,
    link: APP_ROUTES.PRIVACY,
  },
]

const getListItemIconByType = cond([
  [equals(HOME), always(<Home />)],
  [equals(HORSE_RACING), always(<Pets />)],
  [equals(FOOTBALL), always(<DirectionsRun />)],
  [equals(ABOUT_US), always(<People />)],
  [equals(CONTACTS), always(<Contacts />)],
  [equals(PRIVACY), always(<Security />)],
  [T, always(null)],
])

function MobileHeaderNavigation() {
  const classes = useStyles()
  const [visible, toggleVisible] = useToggle()

  const menu = useMemo(
    () => (
      <div
        className={`mobileHeader ${classes.list}`}
        role="presentation"
        onClick={toggleVisible}
        onKeyDown={toggleVisible}
        style={{ backgroundColor: '#f3f3f3' }}
      >
        <List component="ul">
          {LINKS.map(({ link, title }) => (
            <Link key={title} to={link}>
              <ListItem button>
                <ListItemIcon>{getListItemIconByType(title)}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    ),
    [toggleVisible, classes.list],
  )

  return (
    <>
      <Menu
        onClick={toggleVisible}
        style={{
          cursor: 'pointer',
          fontSize: 40,
          color: 'white',
          float: 'right',
        }}
      />
      {visible && (
        <Drawer anchor="right" open onClose={toggleVisible}>
          {menu}
        </Drawer>
      )}
    </>
  )
}

export default MobileHeaderNavigation
