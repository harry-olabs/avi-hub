import { REGISTRATION_SUCCESS } from "../types/action-types";

export const registrationSuccess = (userCredentials) => ({
  type: REGISTRATION_SUCCESS,
  payload: userCredentials,
});
