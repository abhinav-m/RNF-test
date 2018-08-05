import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class ContactUsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      validations: {
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: ''
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  resetForm() {
    this.setState({
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      validations: {
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: ''
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    //TODO:dispatch action to save contact us details.
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <TextField
            hintText="Enter your first name."
            floatingLabelText="Enter your first name."
            errorText={this.state.validations.firstName}
          />
        </div>
        <div>
          <TextField
            name="lastName"
            hintText="Enter your last name."
            floatingLabelText="Enter your last name."
            label="Last Name"
            errorText={this.state.validations.lastName}
          />
        </div>
        <div>
          <TextField
            name="email"
            hintText="Enter your email address."
            floatingLabelText="Enter your last name."
            label="Last Name"
            errorText={this.state.validations.lastName}
          />
        </div>
        <div>
          <TextField
            name="Phone number"
            hintText="Enter your phone number."
            floatingLabelText="Enter your phone number."
            label="Phone number"
            errorText={this.state.validations.phoneNumber}
          />
        </div>

        <div>
          <TextField
            name="query"
            label="Your query"
            multiLine={true}
            rows={2}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={this.resetForm}>
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

export default ContactUsForm;
