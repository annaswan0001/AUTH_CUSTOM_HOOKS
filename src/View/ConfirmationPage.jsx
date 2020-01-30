import React, { useState } from "react";
import { Link } from "react-router-dom";

export default class ConfirmationPage extends React.Component {

  state = {
    loading: true,
    success: false
  };
  render() {
    return (
      <React.Fragment>
        <div>{loading && <div>Validating your email</div>}</div>
        <div>
          {loading && success && (
            <React.Fragment>
              <div>Thank you.Your account has been verified</div>
              <Link to="/dashboard">Go to your dashboard</Link>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}
