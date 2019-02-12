import api from "../services/api";
import { userLoggedIn } from "./auth";

export const signup = data => dispatch =>
  api.user.signup(data).then(user => {
    localStorage.token = user.token;
    dispatch(userLoggedIn(user));
  });