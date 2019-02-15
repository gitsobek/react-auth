import React, { Component } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import PropTypes from "prop-types";
import _ from "lodash";
import InlineError from "../messages/InlineError";

class ResetPasswordForm extends Component {
  state = {
    data: {
      token: this.props.token,
      password: "",
      passwordConfirmation: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e => {
    const { data } = this.state;
    this.setState({
      data: { ...data, [e.target.name]: e.target.value }
    });
  };

  onSubmit = () => {
    const { data } = this.state;
    const { submit } = this.props;

    const errors = this.validate(data);
    this.setState({ errors });

    if (_.isEmpty(errors)) {
      this.setState({ loading: true });
      submit(data).catch(err =>
        this.setState({ errors: err.response.data.errors, loading: false })
      );
    }
  };

  validate = data => {
    const errors = {};
    if (!data.password) errors.email = "Cannot be blank";
    if (data.password !== data.passwordConfirmation)
      errors.password = "Passwords must match";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global && (
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">
            New Password
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Type your new password"
              value={data.password}
              onChange={this.onChange}
            />
            {errors.password && <InlineError text={errors.password} />}
          </label>
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="passwordConfirmation">
            Confirm password
            <input
              type="password"
              id="passwordConfirmation"
              name="passwordConfirmation"
              placeholder="Confirm it"
              value={data.passwordConfirmation}
              onChange={this.onChange}
            />
            {errors.password && <InlineError text={errors.password} />}
          </label>
        </Form.Field>
        <Button primary>Reset password</Button>
      </Form>
    );
  }
}

ResetPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired
};

export default ResetPasswordForm;
