import React from "react";

import bground from "../../assets/img/background.jpg";

import { useStyles } from './parallax.styles';

const Parallax = props => {
    const classes = useStyles();

    return (
        <div
            className={classes.parallax}
            style={{
                backgroundImage: `url(${bground})`,
                // transform: transform
            }}
        ></div>
    )
}

export default Parallax;