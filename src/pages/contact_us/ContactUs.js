import React, { useContext, useMemo, useRef, useState } from 'react'
import { instanceOf } from 'prop-types'
import { withRouter } from 'react-router'
import DateFnsUtils from '@date-io/date-fns'
import classNames from 'classnames'
import {
  Box,
  Button,
  Container,
  Slide,
  Snackbar,
  TextField,
} from '@material-ui/core'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'

import { APP_ROUTES, SITE_VERSION } from 'common/constants'
import { PageTitle, SubHeader } from 'common/components'
import SiteVersionContext from 'common/context/siteVersionContext'

import './styles.css'
import 'date-fns'

// eslint-disable-next-line no-undef
const ua = window.navigator.userAgent
const isIE = /MSIE|Trident/.test(ua)

const { ONLINE } = SITE_VERSION
const SUCCESS_MESSAGE = 'Formular erfolgreich abgeschickt!'
const transition = props => <Slide direction="left" {...props} />

function ContactUs({ history }) {
  const formRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState({
    name: '',
    nachname: '',
    selectedDate: null,
    email: '',
    phone: '',
    message: '',
    subject: '',
  })
  const version = useContext(SiteVersionContext)
  const isOnline = useMemo(() => version === ONLINE, [version])

  const handleChange = prop => ({ target: { value } }) => {
    setValues({ ...values, [prop]: value })
  }

  const handleDateChange = selectedDate => {
    setValues(prevValues => ({
      ...prevValues,
      selectedDate,
    }))
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = evt => {
    const isFormValid = formRef.current.checkValidity()

    if (isFormValid) {
      evt.preventDefault()
      setOpen(true)

      setTimeout(() => {
        history.push(APP_ROUTES.HOME)
      }, 1300)
    }
  }

  return (
    <>
      <Snackbar
        message={<span id="message-id">{SUCCESS_MESSAGE}</span>}
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        TransitionProps={{
          style: {
            backgroundColor: 'green',
          },
        }}
        transitionDuration={1000}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className="content bookmaker__contact-us bookmaker__background-online">
          <form
            autoComplete="off"
            ref={formRef}
            style={{ width: '100%' }}
            target="_blank"
          >
            <Container>
              <SubHeader />
              <PageTitle
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9294117647058824)',
                  color: 'black',
                  borderRadius: '5px',
                  padding: '5px',
                }}
                title="Kontakt"
              />
              <Container className="inside-layout-about-us">
                {isOnline && (
                  <div>
                    <span style={{ fontFamily: 'serif' }}>
                      Sie haben unsere Website besucht und können nicht finden
                      wonach Sie suchen oder haben Anregungen? Treten Sie mit
                      uns in Kontakt! Sind Sie ein Hotelbesitzer, in der Nähe
                      eines Casinos oder mit einem hauseigenen Casino, der nicht
                      beachtet wurde? Auch Sie sind alle herzlich dazu
                      eingeladen mit uns in Kontakt zu treten! Wir hoffen von
                      Ihnen zu hören. Zweifelsfrei sind Ihre Gedanken wichtig
                    </span>
                  </div>
                )}
                <Box
                  className={classNames('contact_us_layout', {
                    contact_us_layout__ie: isIE,
                  })}
                >
                  <h2> Geben Sie ihre Nachricht ein</h2>
                  <TextField
                    required
                    autoComplete="off"
                    id="outlined-adornment-weight"
                    variant="outlined"
                    label="Gegenstand"
                    value={values.subject}
                    onChange={handleChange('subject')}
                    multiline
                    rows={4}
                  />
                  <TextField
                    required
                    autoComplete="off"
                    style={{ marginTop: 20 }}
                    id="outlined-adornment-weight"
                    variant="outlined"
                    label="Nachricht"
                    value={values.message}
                    onChange={handleChange('message')}
                    multiline
                    rows={4}
                  />
                  <h2> Geben Sie ihre Details ein </h2>
                  <TextField
                    required
                    autoComplete="off"
                    id="outlined-adornment-weight"
                    variant="outlined"
                    label="Name"
                    value={values.name}
                    onChange={handleChange('name')}
                  />
                  <TextField
                    required
                    autoComplete="off"
                    style={{ marginTop: 20 }}
                    id="outlined-adornment-weight"
                    variant="outlined"
                    label="Nachname"
                    value={values.nachname}
                    onChange={handleChange('nachname')}
                  />
                  <KeyboardDatePicker
                    className="bookmaker__datepicker"
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Geburtsdatum"
                    value={values.selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                    required
                  />
                  <TextField
                    type="email"
                    required
                    autoComplete="email"
                    style={{ marginTop: 20 }}
                    id="outlined-adornment-weight"
                    variant="outlined"
                    label="Email"
                    value={values.email}
                    onChange={handleChange('email')}
                  />
                  <TextField
                    type="number"
                    required
                    autoComplete="off"
                    style={{ marginTop: 20 }}
                    id="outlined-adornment-weight"
                    variant="outlined"
                    label="Telefon"
                    value={values.phone}
                    onChange={handleChange('phone')}
                  />
                  <Button
                    style={{
                      fontSize: 18,
                      height: 58,
                      marginBottom: 20,
                      marginTop: 20,
                    }}
                    target="blank"
                    variant="contained"
                    color="secondary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Senden
                  </Button>
                </Box>
              </Container>
            </Container>
          </form>
        </div>
      </MuiPickersUtilsProvider>
    </>
  )
}

ContactUs.propTypes = {
  history: instanceOf(Object).isRequired,
}

export default withRouter(ContactUs)
