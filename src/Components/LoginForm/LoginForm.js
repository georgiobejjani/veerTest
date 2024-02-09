import React, { useState } from "react";
import classes from "./LoginForm.module.scss";
import userIcon from "../../assets/user-add-fill.png";
import InputField from "./InputField";
import emailIcon from '../../assets/emailIcon.png';
import passwordIcon from '../../assets/passIcon.png';

export default function LoginForm() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }))
    }

    const submitForm = (e) => {
        e.preventDefault();
    }

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
            <h1 className={classes.formWrapper__title}>
                login
            </h1>
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
                <InputField
                    titleLabel="password"
                    placeHolder="Enter your password"
                    inputIcon={passwordIcon}
                    inputType="password"
                    name="password"
                    setValue={handleInputChange}
                    value={values.password}
                />
                <button className={classes.formWrapper_loginBtn} type="submit">login</button>
            </form>
        </div>
    );
}
