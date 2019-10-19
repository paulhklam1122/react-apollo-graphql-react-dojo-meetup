import React from 'react'
import { useMutation } from '@apollo/react-hooks'

import { Button, TextField } from '@material-ui/core'

import { ADD_CONTACT, GET_CONTACTS } from '../../queries'

const AddContact = ({ id, firstName, lastName, formError, onInputChange, validateForm }) => {
  const [addContact] = useMutation(
    ADD_CONTACT,
    {
      update(cache, { data: { addContact } }) {
        const { contacts } = cache.readQuery({ query: GET_CONTACTS })
        cache.writeQuery({
          query: GET_CONTACTS,
          data: { contacts: contacts.concat([addContact]) }
        })
      }
    }
  )

  return (
    <form onSubmit={e => {
      e.preventDefault()
      validateForm()
      addContact({
        variables: {
          id, firstName, lastName
        },
        optimisticResponse: {
          __typename: 'Mutation',
          addContact: {
            __typename: 'Contact',
            id,
            firstName,
            lastName
          }
        },
        update: (proxy, { data: { addContact } }) => {
          const data = proxy.readQuery({ query: GET_CONTACTS })
          proxy.writeQuery({
            query: GET_CONTACTS, data: {
              ...data,
              contacts: [...data.contacts, addContact]
          }})
        }
      })
    }}>
      <TextField
        label='First Name'
        value={firstName}
        placeholder='i.e. John'
        onChange={e => onInputChange('firstName', e.target.value)}
        error={formError}
        margin='normal'
        variant='outlined'
        style={{ margin: '10px' }}
      />
      <TextField
        label='Last Name'
        value={lastName}
        placeholder='i.e. Smith'
        onChange={e => onInputChange('lastName', e.target.value)}
        error={formError}
        margin='normal'
        variant='outlined'
        style={{ margin: '10px' }}
      />
      <Button
        type='submit'
        variant='contained'
        color='primary'
        style={{ marginTop: '20px', alignItems: 'center', marginLeft: '10px' }}
      >
        Add Contact
      </Button>
    </form>
  )
}

export default AddContact
