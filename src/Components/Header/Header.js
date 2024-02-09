import React from "react";
import classes from "./Header.module.scss";
import contactUsIcon from "../../assets/contactUsIcon.png";
import HeaderPattern from "../HeaderPattern/HeaderPattern";

export default function Header() {
    return (
        <>
            <header className={classes.header}>
                <div className="container">
                    <nav className={classes.navBar}>
                        <span className={classes.navBar__link}>Need help?</span>
                        <button className={classes.navBar__btnAction}>
                            <img
                                alt="contactUs-icon"
                                src={contactUsIcon}
                                className={classes.navBar__icon}
                            />
                            contact us
                        </button>
                        <div className={classes.closeContainer} />
                    </nav>
                </div>
            </header>
            <HeaderPattern />
        </>
    );
}
