import React from 'react'
import classes from './Footer.module.scss';
export default function Footer() {
    return (
        <footer className={classes.footer_container}>
            <div className='container'>
                <span className={classes.footer_container__tag}>© {new Date().getFullYear()} Synergy HR</span>
            </div>
        </footer>
    )
}
