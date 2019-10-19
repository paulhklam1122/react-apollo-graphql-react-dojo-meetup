import React from 'react'
import { useMutation } from '@apollo/react-hooks'

import { Button, TextField } from '@material-ui/core'

import { UPDATE_CONTACT } from '../../queries'

const UpdateContact = (props) => {
  const { id, firstName, lastName, onButtonClick, onInputChange } = props
  const [updateContact] = useMutation(UPDATE_CONTACT)
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        updateContact({
          variables: {
            id, firstName, lastName
          },
          optimisticResponse: {
            __typename: 'Mutation',
            updateContact: {
              __typename: 'Contact',
              id,
              firstName,
              lastName
            }
          }
        })
        onButtonClick()
      }}
    >
      <TextField
        label='First Name'
        defaultValue={firstName}
        placeholder='i.e. John'
        onChange={e => onInputChange('firstName', e.target.value)}
        margin='normal'
        varian='outlined'
        style={{ margin: '10px' }}
      />
      <TextField
        label='Last Name'
        defaultValue={lastName}
        placeholder='i.e. Smith'
        onChange={e => onInputChange('lastName', e.target.value)}
        margin='normal'
        varian='outlined'
        style={{ margin: '10px' }}
      />
      <Button
        type='submit'
        variant='contained'
        color='primary'
        style={{ margin: '10px' }}
      >
        Update Contact
      </Button>
      <Button
        onClick={onButtonClick}
        variant='contained'
        color='secondary'
        style={{ margin: '10px' }}
      >
        Cancel
      </Button>
    </form>
  )
}

export default UpdateContact