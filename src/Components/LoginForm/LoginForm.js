import React, { useContext, useEffect, useState } from "react";
import classes from "./LoginForm.module.scss";
import userIcon from "../../assets/user-add-fill.png";
import InputField from "./InputField";
import emailIcon from "../../assets/emailIcon.png";
import passwordIcon from "../../assets/passIcon.png";
import ReturnMessage from "../ReturnMessage/ReturnMessage";
import { LoginContext } from "../../loginContext";
import Loader from "../Loader/Loader";

export default function LoginForm() {
  const { handleLogin, state } = useContext(LoginContext);
  const [disabled, setDisabled] = useState(true);
  const [helpMessage, setHelpMessage] = useState(null)
  const { loader, returnMessage, status } = state;
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  console.log(loader, returnMessage)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    handleLogin(values.email, values.password);
  };

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  useEffect(() => {
    const validatedEmail = validateEmail(values.email);
    if (values.email !== "") {
      if (validatedEmail) {
        setHelpMessage(false);
      } else {
        setHelpMessage(true);
      }
    }
    else {
      setHelpMessage(false);
    }
  }, [values.email]);

  useEffect(() => {
    if (!helpMessage && values.password !== '' && values.email !== '') {
      setDisabled(false);
    } else { setDisabled(true); }
  }, [helpMessage, values.password, values.email])

  return (
    <div className={classes.formWrapper}>
      <div className={classes.formWrapper_fadeContainer}>
        <div className={classes.formWrapper_iconContainer}>
          <img
            src={userIcon}
            className={classes.formWrapper__userIcon}
            alt="userIcon"
          />
        </div>
      </div>
      <h1 className={classes.formWrapper__title}>login</h1>
      <span className={classes.formWrapper__subTitle}>
        Enter your details to login
      </span>
      <form className={classes.formWrapper_controlForm} onSubmit={submitForm}>
        <InputField
          titleLabel="email address"
          placeHolder="test@test.com"
          inputIcon={emailIcon}
          inputType="email"
          name="email"
          setValue={handleInputChange}
          value={values.email}
        />
        {helpMessage ? <span className={classes.formWrapper__validationMsg}>Please enter a valid email address</span> : ''}

        <InputField
          titleLabel="password"
          placeHolder="Enter your password"
          inputIcon={passwordIcon}
          inputType="password"
          name="password"
          setValue={handleInputChange}
          value={values.password}
        />
        <button className={classes.formWrapper_loginBtn} type="submit" disabled={disabled}>
          {loader ? <Loader /> : "login"}
        </button>
      </form>
      <span className={classes.bottomText}>Already have an account?<a href="#">Login</a></span>
      {returnMessage && <ReturnMessage type={status ? "success" : "error"} message={returnMessage} />}
    </div>
  );
}
