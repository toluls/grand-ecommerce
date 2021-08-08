import React, { useReducer } from "react";
import classes from "./OrderForm.module.scss";

const initialState = {
  name: { value: "", active: false },
  number: { value: "", active: false },
  email: { value: "", active: false },
  address: { value: "", active: false },
  notes: { value: "" },
};

// I'll be using a simple form validation for this demo, nothing serious going on here. No data will be sent.

const detailsReducer = (state, action) => {
  let val = action.value;

  switch (action.type) {
    case "NAME":
      return {
        ...state,
        name: { value: val, active: true, isValid: val.trim().length > 5 },
      };
    case "EMAIL":
      return {
        ...state,
        email: {
          value: val,
          active: true,
          isValid: val.trim().includes("@") && val.length > 5,
        },
      };
    case "PHONE":
      return {
        ...state,
        number: { value: val, active: true, isValid: val.trim().length > 5 },
      };
    case "ADDRESS":
      return {
        ...state,
        address: { value: val, active: true, isValid: val.trim().length > 10 },
      };
    case "NOTES":
      return { ...state, notes: { value: val } };
    default:
      return state;
  }
};

const OrderForm = (props) => {
  const [details, dispatchDetails] = useReducer(detailsReducer, initialState);
  const formValid =
    details.name.isValid &&
    details.email.isValid &&
    details.number.isValid &&
    details.address.isValid;

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: details.name.value,
      email: details.email.value,
      number: details.number.value,
      address: details.address.value,
      notes: details.notes.value,
    };

    props.onFormSubmit(formData);
  };

  const handleNameChange = (event) => {
    dispatchDetails({ type: "NAME", value: event.target.value });
  };

  const handleEmailChange = (event) => {
    dispatchDetails({ type: "EMAIL", value: event.target.value });
  };

  const handlePhoneChange = (event) => {
    dispatchDetails({ type: "PHONE", value: event.target.value });
  };

  const handleAddressChange = (event) => {
    dispatchDetails({ type: "ADDRESS", value: event.target.value });
  };

  const handleNotesChange = (event) => {
    dispatchDetails({ type: "NOTES", value: event.target.value });
  };

  return (
    <form className={classes.form} onSubmit={handleFormSubmit}>
      <input
        onChange={handleNameChange}
        value={details.name.value}
        type="text"
        placeholder="First and Last Name"
      />
      {details.name.active && !details.name.isValid && (
        <p>Must be longer than 5 characters</p>
      )}
      <input
        onChange={handleEmailChange}
        value={details.email.value}
        type="email"
        placeholder="Email"
      />
      {details.email.active && !details.email.isValid && (
        <p>Must be longer than 5 characters and contain '@'</p>
      )}
      <input
        onChange={handlePhoneChange}
        value={details.number.value}
        type="tel"
        placeholder="Phone"
      />
      {details.number.active && !details.number.isValid && (
        <p>Must be longer than 5 characters</p>
      )}
      <input
        onChange={handleAddressChange}
        value={details.address.value}
        type="text"
        placeholder="Delivery address"
      />
      {details.address.active && !details.address.isValid && (
        <p>Must be longer than 10 characters</p>
      )}
      <input
        onChange={handleNotesChange}
        value={details.notes.value}
        type="text"
        placeholder="Optional order notes"
      />
      <button type="submit" disabled={!formValid}>
        Place Order
      </button>
    </form>
  );
};

export default OrderForm;
