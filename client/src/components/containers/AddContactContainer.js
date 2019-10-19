import React, { Component } from 'react'

import AddContact from '../forms/AddContact'
const uuidv4 = require('uuid/v4')


class AddContactContainer extends Component {
  state = {
    id: uuidv4(),
    firstName: '',
    lastName: '',
    formError: false
  }

  handleInputChange = (key, value) => {
    this.setState({ [key]: value })
  }

  validateForm = () => {
    const { firstName, lastName } = this.state
    if (!firstName || !lastName) {
      alert('Both the first name and last name fields have to be filled out.')
      this.setState({ formError: true })
      return false
    } else {
      this.setState({ formError: false })
    }
  }

  render() {
    const { id, firstName, lastName, formError } = this.state
    return (
      <AddContact
        id={id}
        firstName={firstName}
        lastName={lastName}
        formError={formError}
        onInputChange={this.handleInputChange}
        validateForm={this.validateForm}
      />
    )
  }
}

export default AddContactContainer
