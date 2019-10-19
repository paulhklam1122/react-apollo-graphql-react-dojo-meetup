import React, { Component } from 'react'
import UpdateContact from '../forms/UpdateContact'
import RemoveContact from '../buttons/RemoveContact'

import { Button, ListItem, ListItemText } from '@material-ui/core'

class Contact extends Component {
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
    this.setState({
      [key]: value
    })
  }

  render() {
    const { editMode, id, firstName, lastName } = this.state
    const fullName = `${firstName} ${lastName}`

    return (
      <div>
        {
          editMode ?
            <UpdateContact
              id={id}
              firstName={firstName}
              lastName={lastName}
              onButtonClick={this.handleButtonClick}
              onInputChange={this.handleInputChange}
            />
            :
            <ListItem>
              <ListItemText
                primary={fullName}
              />
                <Button
                  onClick={e => this.handleButtonClick()}
                  variant='contained'
                  style={{ margin: '5px' }}
                >
                  Edit
                </Button>
                <RemoveContact id={id} firstName={firstName} lastName={lastName} />
            </ListItem>
        }
      </div>
    )
  }
}

export default Contact