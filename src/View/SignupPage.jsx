import React, {useState, useEffect, useCallback, useRef} from "react";
import { useSignUpForm } from "../customHooks/signUpHook";
import timezones from "../timezones/timezons";
import _ from "lodash";
import classNames from "classnames/bind";
import TextField from "../Сomponents/TextField";
import {useFetchData} from '../customHooks/fetchHook'
import { useHistory } from "react-router-dom";
import validateInput from '../utils/utils'
import axios from 'axios'

const SignUpPage = () => {
  let history = useHistory();
  
  const [errors, setError] = useState({});
  const redirectToHomePage = ()=>history.push('/')

  const [res, apiMethod] = useFetchData({url: 'https://jsonplaceholder.typicode.com/posts', payload: {
    title: 'foo',
    body: 'bar',
    userId: 1
  }},redirectToHomePage)

  const isValid = () =>{
    const { errors, isValid } = validateInput(inputs);
    console.log(isValid,"isValid")
    if (!isValid) {
      setError(errors)
    }
    return isValid;
  }

  const setUserDataForRequest = ()=>{
    if (isValid()){
      setUserData(inputs)
      apiMethod()
      // setError(res.error);
    }
  }

  const {
    inputs,
    loading,
    handleInputChange,
    handleSubmit,
  } = useSignUpForm(setUserDataForRequest);


const [userData, setUserData] = useState([])
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);
const [isSending, setIsSending] = useState(false)
const isMounted = useRef(true)

  const options = _.map(timezones, (val, key) => {
    return (
      <option key={val} value={val}>
        {key}
      </option>
    );
  });





  return (
    <React.Fragment>
      {errors.length > 0 && <div>{errors}</div>}
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <TextField
          name="firstName"
          onChange={handleInputChange}
          value={inputs.firstName}
          type="text"
          placeholder="First name"
          label="First name"
          error={errors.firstName}
        />
        <TextField
          name="lastName"
          onChange={handleInputChange}
          value={inputs.lastName}
          type="text"
          placeholder="Last name"
          label="Last name"
          error={errors.lastName}
        />
        <TextField
          name="email"
          onChange={handleInputChange}
          value={inputs.email}
          type="text"
          placeholder="email"
          label="Email"
          error={errors.email}
        />
        <TextField
          name="password1"
          onChange={handleInputChange}
          value={inputs.password1}
          type="text"
          placeholder="Password"
          label="Password"
          error={errors.password1}
        />
        <TextField
          name="password2"
          onChange={handleInputChange}
          value={inputs.password2}
          type="text"
          placeholder="Password confirmation"
          label="Password"
          error={errors.password2}
        />

        <div
          className={classNames("form-group", { "has-error": errors.timezone })}
        >
          <label>TimeZone</label>

          <select
            name="timezone"
            onChange={handleInputChange}
            value={inputs.timezone}
            className="form-control"
          >
            <option value="" disabled>
              Choose your timezone
            </option>
            {options}
          </select>
          {errors.timezone && <span>{errors.timezone}</span>}
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>

        {loading && <div style={{ color: "red" }}>Loading...</div>}
      </form>
    </React.Fragment>
  );
};

export default SignUpPage;
