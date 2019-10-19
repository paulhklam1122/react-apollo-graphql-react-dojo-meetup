import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { GET_CONTACTS } from '../../queries'
import { Container, List } from '@material-ui/core'
import ContactContainer from '../containers/ContactContainer'

const Contacts = () => {
  const { loading, error, data } = useQuery(GET_CONTACTS)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <ul>
      {data.contacts.map(({ id, firstName, lastName }) => (
        <Container key={id}>
          <List>
            <ContactContainer
              key={id}
              id={id}
              firstName={firstName}
              lastName={lastName}
            />
          </List>
        </Container>
      ))}
    </ul>
  )
}

export default Contacts
