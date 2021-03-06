import React, { Component } from "react";
import PropTypes from "prop-types";
import { Message } from "semantic-ui-react";
import { connect } from "react-redux";
import ResetPasswordForm from "../forms/ResetPasswordForm";
import { validateToken, resetPassword } from "../../actions/auth";

class ResetPassword extends Component {
  state = {
    loading: true,
    success: false
  };

  componentDidMount() {
    const { validateToken, match } = this.props;
    validateToken(match.params.token)
      .then(() => this.setState({ loading: false, success: true }))
      .catch(() => this.setState({ loading: false, success: false }));
  }

  submit = data => {
    const { resetPassword, history } = this.props;
    return resetPassword(data).then(() => history.push("/login"));
  };

  render() {
    const { loading, success } = this.state;
    const token = this.props.match.params.token;
    return (
      <div>
        {loading && <Message>Loading</Message>}
        {!loading && success && (
          <ResetPasswordForm submit={this.submit} token={token} />
        )}
        {!loading && !success && <Message>Invalid token</Message>}
      </div>
    );
  }
}

ResetPassword.propTypes = {
  validateToken: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(
  null,
  { validateToken, resetPassword }
)(ResetPassword);
