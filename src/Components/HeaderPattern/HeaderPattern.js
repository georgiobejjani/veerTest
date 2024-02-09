import React, { useEffect, useState } from 'react';
import classes from './HeaderPattern.module.scss';

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
            {linesCount}
        </div>
    );
}
