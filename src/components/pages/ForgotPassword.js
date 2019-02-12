import React, { Component } from "react";
import PropTypes from "prop-types";
import { Message } from "semantic-ui-react";
import { connect } from "react-redux";
import ForgotPasswordForm from "../forms/ForgotPasswordForm";
import { resetPasswordRequest } from "../../actions/auth";

class ForgotPassword extends Component {
  state = {
    success: false
  };

  submit = data => {
    const { resetPasswordRequest } = this.props;
    return resetPasswordRequest(data).then(() =>
      this.setState({ success: true })
    );
  };

  render() {
    const { success } = this.state;
    return (
      <div>
        {success ? (
          <Message>Email has been sent.</Message>
        ) : (
          <ForgotPasswordForm submit={this.submit} />
        )}
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  resetPasswordRequest: PropTypes.func.isRequired
};

export default connect(
  null,
  { resetPasswordRequest }
)(ForgotPassword);
