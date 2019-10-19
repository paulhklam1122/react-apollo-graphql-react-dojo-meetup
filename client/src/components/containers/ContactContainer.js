import React, { Component } from 'react'
import Contact from '../listItems/Contact'

class ContactContainer extends Component {
  state = {
    id: this.props.id || '',
    firstName: this.props.firstName || '',
    lastName: this.props.lastName || '',
    editMode: false
  }

  handleButtonClick = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  handleInputChange = (key, value) => {
    this.setState({ [key]: value })
  }

  render() {
    const { editMode, id, firstName, lastName } = this.state

    return (
      <Contact
        editMode={editMode}
        id={id}
        firstName={firstName}
        lastName={lastName}
        onButtonClick={this.handleButtonClick}
        onInputChange={this.handleInputChange}
      />
    )
  }
}

export default ContactContainer
