import React from "react";
import { useSignUpForm } from "../customHooks/customHooks";
import timezones from "../timezones/timezons";
import _ from "lodash";

const SignUp = () => {
  const onSignUp = () => {
    alert(
      `User Created! Name: ${inputs.firstName} ${inputs.lastName} Email: ${inputs.email}`
    );
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(onSignUp);

  const options = _.map(timezones, (val, opt) => {
    return (
      <option key={val} value={val}>
        {opt}
      </option>
    );
  });

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>First name</label>
        <input
          name="firstName"
          onChange={handleInputChange}
          value={inputs.firstName || ""}
          type="text"
          className="form-control"
          placeholder="First name"
        />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          name="lastName"
          onChange={handleInputChange}
          value={inputs.lastName || ""}
          type="text"
          className="form-control"
          placeholder="Last name"
        />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          name="email"
          onChange={handleInputChange}
          value={inputs.email || ""}
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          name="password1"
          onChange={handleInputChange}
          value={inputs.password1 || ""}
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password2"
          onChange={handleInputChange}
          value={inputs.password2 || ""}
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <div className="form-group">
        <label>TimeZone</label>

        <select
          name="timezone"
          onChange={handleInputChange}
          value={inputs.timezone || ""}
          className="form-control"
        >
          <option value="" disabled>
            Choose your timezone
          </option>
          {options}
        </select>
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="#">sign in?</a>
      </p>
    </form>
  );
};
export default SignUp;
