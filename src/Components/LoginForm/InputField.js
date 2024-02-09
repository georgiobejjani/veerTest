import React, { useEffect, useState } from 'react'
import classes from './LoginForm.module.scss';

export default function InputField({ titleLabel, placeHolder, inputIcon, inputType, setValue, value, name }) {

    return (
        <div className={classes.inputContainer}>
            <label className={classes.inputContainer__subTitle}>{titleLabel}</label>
            <div className={classes.fieldWrapper}>
                <div className={classes.fieldWrapper_iconContainer}>
                    <img src={inputIcon} alt="input Icon" className={classes.fieldWrapper__icon} />
                </div>
                <input
                    required
                    type={inputType}
                    placeholder={placeHolder}
                    className={classes.fieldWrapper_inputType}
                    name={name}
                    value={value}
                    onChange={setValue}
                />
            </div>
        </div>
    )
}
