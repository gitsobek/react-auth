import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/auth`, { credentials })
        .then(res => res.data.user),
    signup: user =>
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/users`, { user })
        .then(res => res.data.user),
    confirm: token =>
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/auth/confirmation`, {
          token
        })
        .then(res => res.data.user),
    resetPasswordRequest: email =>
      axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/reset_password_request`,
        { email }
      ),
    validateToken: token =>
      axios.post(`${process.env.REACT_APP_API_URL}/api/auth/validate_token`, {
        token
      }),
    resetPassword: data =>
      axios.post(`${process.env.REACT_APP_API_URL}/api/auth/reset_password`, {
        data
      })
  }
};
