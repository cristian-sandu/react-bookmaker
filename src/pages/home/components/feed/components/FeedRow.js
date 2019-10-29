import React from 'react'
import { Button } from '@material-ui/core'
import { number, string, bool } from 'prop-types'
import StarRatingComponent from 'react-star-rating-component'
import { Td as TableCell, Tr as TableRow } from 'react-super-responsive-table'

import { getImageByName } from '../utils/utils'

const FeedRow = ({
  name,
  location,
  openingHours,
  reviews,
  ourItem,
  betNow,
  link,
  maskedLink,
  isOnline,
  isMobile,
}) => {
  const handleRedirect = evt => {
    evt.preventDefault()
    // eslint-disable-next-line no-undef
    if (!window && !window.open) return
    // eslint-disable-next-line no-undef
    window.open(link)
  }

  return (
    <TableRow key={name}>
      <TableCell>
        <a onClick={handleRedirect} target="blank" href={maskedLink}>
          <img
            width={170}
            style={{ padding: 5 }}
            src={getImageByName(name)}
            alt={name}
          />
        </a>
      </TableCell>
      <TableCell>
        <span style={{ textAlign: 'center' }}>{location}</span>
      </TableCell>
      <TableCell>
        <span
          className="opening_hours"
          style={
            isOnline && !isMobile ? { width: 120, textAlign: 'center' } : {}
          }
        >
          {openingHours}
        </span>
      </TableCell>
      <TableCell>
        <span
          className="stars_rating"
          style={isOnline ? { fontSize: 20, width: 120 } : { fontSize: 20 }}
        >
          <StarRatingComponent
            name={String(reviews)}
            starCount={5}
            value={reviews}
          />
        </span>
      </TableCell>
      <TableCell>
        <span
          className="rating_grate"
          style={{ fontSize: 40, color: '#bc2e2e' }}
        >
          {ourItem}
        </span>
      </TableCell>
      <TableCell>
        <Button
          className={isOnline ? 'besuchen_btn__online' : 'besuchen_btn'}
          target="blank"
          href={maskedLink}
          variant="contained"
          color="secondary"
          onClick={handleRedirect}
        >
          {betNow}
        </Button>
      </TableCell>
    </TableRow>
  )
}

FeedRow.propTypes = {
  name: string.isRequired,
  location: string.isRequired,
  openingHours: string.isRequired,
  reviews: number.isRequired,
  ourItem: number.isRequired,
  betNow: string.isRequired,
  link: string.isRequired,
  maskedLink: string.isRequired,
  isOnline: bool.isRequired,
  isMobile: bool.isRequired,
}

export default FeedRow
