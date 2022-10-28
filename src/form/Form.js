import React, { useState } from "react";
import "./Form.module.css";
const Form = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState({
    emailErr: "",
    passwordErr: "",
  });
  const onEmailChange = (e) => {
    const email = e.target.value;
    setUserInfo({ ...userInfo, email });
  };

  const onPasswordChange = (e) => {
    const password = e.target.value;
    if (password.length < 6) {
      setErr({
        ...err,
        passwordErr: "Password must be at least six characters long",
      });
    } else if (!password.includes("A")) {
      setErr({
        ...err,
        passwordErr: "Password must be contain 1 uppercase",
      });
    } else if (password.length === 0) {
      setErr({
        ...err,
        passwordErr: "",
      });
    } else {
      setErr({
        ...err,
        passwordErr: "",
      });
    }
    setUserInfo({ ...userInfo, password });
  };
  return (
    <form>
      <fieldset>
    
        <legend>First Name</legend>
        <input
          value={userInfo.email}
          onChange={onEmailChange}
          type="text"
          placeholder="Your email.."
        />
      </fieldset>

      <br />
      <label>Last Name</label>
      <input
        value={userInfo.password}
        onChange={onPasswordChange}
        type="password"
        placeholder="Your password.."
      />
      <small style={{ color: "red" }}> {err.passwordErr}</small>
      <img src="../assets/eye.png" alt="" />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
