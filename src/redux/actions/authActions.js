import {
  REGISTRATION_SUCCESS,
} from "../actionTypes"

export const registrationSuccess = (userCredentials) => ({
  type: REGISTRATION_SUCCESS,
  payload: userCredentials,
});
