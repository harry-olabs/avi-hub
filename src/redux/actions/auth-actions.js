import { REGISTRATION_SUCCESS, LOGIN_SUCCESS  } from "../types/action-types";

export const registrationSuccess = (userCredentials) => ({
  type: REGISTRATION_SUCCESS,
  payload: userCredentials,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});