import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types'

export default function TextField({
  onChange,
  type,
  name,
  value,
  placeholder,
  error,
  label
}) {
  return (
    <div
      className={classNames("form-group", { "has-error": error })}
    >
      <label>{label}</label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        className="form-control"
        placeholder={placeholder}
      />
      {error && <span>{error}</span>}
    </div>
  );
}

TextField.propTypes = {
    name : PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    error:PropTypes.string

}
