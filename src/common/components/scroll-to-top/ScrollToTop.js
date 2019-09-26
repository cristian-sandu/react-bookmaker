import { useEffect } from 'react'
import { withRouter } from 'react-router'
import { array, element, instanceOf, oneOfType } from 'prop-types'

const ScrollToTop = ({ children, location }) => {
  useEffect(() => {
    window.scrollTo(0, 0) //eslint-disable-line
  }, [location])

  return children
}

ScrollToTop.propTypes = {
  children: oneOfType([array, element]),
  location: instanceOf(Object),
}

export default withRouter(ScrollToTop)
