import React, { Component } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import Validator from "validator";
import PropTypes from "prop-types";
import _ from "lodash";
import InlineError from "../messages/InlineError";

class ForgotPasswordForm extends Component {
  state = {
    data: {
      email: ""
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
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
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
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              value={data.email}
              onChange={this.onChange}
            />
            {errors.email && <InlineError text={errors.email} />}
          </label>
        </Form.Field>
        <Button primary>Submit</Button>
      </Form>
    );
  }
}

ForgotPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default ForgotPasswordForm;
