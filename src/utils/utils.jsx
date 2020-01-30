import validator from 'validator';
import {isEmpty as isEmptyLodash} from 'lodash';

export default function validateInput(inputs) {
  let errors = {};
//   console.log(inputs)

  if (validator.isEmpty(inputs.firstName)) {
    errors.firstName = 'This field is required';
  }
  if (validator.isEmpty(inputs.lastName)) {
    errors.lastName = 'This field is required';
  }
  if (!validator.isEmail(inputs.email)) {
    errors.email = 'Email is invalid';
  }
  if (validator.isEmpty(inputs.password1)) {
    errors.password1 = 'This field is required';
  }
  if (validator.isEmpty(inputs.password2)) {
    errors.password2 = 'This field is required';
  }
  if (!validator.equals(inputs.password1, inputs.password2)) {
    errors.password2 = 'Passwords must match';
  }
  if (validator.isEmpty(inputs.timezone)) {
    errors.timezone = 'This field is required';
  }

  return {
    errors,
    isValid: isEmptyLodash(errors)
  }

}