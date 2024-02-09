import React, { useEffect, useState } from 'react';
import classes from './HeaderPattern.module.scss';
import userIcon from '../../assets/user-add-fill.png';

export default function HeaderPattern() {
    const [linesCount, setLinesCount] = useState([]);

    useEffect(() => {
        let patternLines = [];
        for (let i = 0; i < 15; i++) {
            patternLines.push(<div key={i} className={classes.pattern__line}></div>)
        }
        setLinesCount(patternLines);
    }, [])

    return (
        <div className={classes.pattern_container}>
            <div className={classes.pattern_fadeContainer} />
            <div className={classes.pattern_iconContainer}>
                <img src={userIcon} className={classes.pattern__userIcon} alt='userIcon' />
            </div>
            {linesCount}
        </div>
    );
}
