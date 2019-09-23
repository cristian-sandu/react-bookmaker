import React from 'react'
import { Button } from '@material-ui/core'
import { number, string } from 'prop-types'
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
      <TableCell style={{ display: 'flex', marginTop: 5 }}>
        <a onClick={handleRedirect} target="blank" href={maskedLink}>
          <img
            width={170}
            style={{ padding: 5 }}
            src={getImageByName(name)}
            alt={name}
          />
        </a>
      </TableCell>
      <TableCell>{location}</TableCell>
      <TableCell>{openingHours}</TableCell>
      <TableCell>
        <span className="stars_rating" style={{ fontSize: 20 }}>
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
          className="besuchen_btn"
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
}

export default FeedRow
