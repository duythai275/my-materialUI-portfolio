import React from "react";

import { useStyles } from './footer.styles';

const Footer = props => {
    const classes = useStyles();

    return (
        <footer className={classes.footerClasses}>
            <div className={classes.container}>
                <div></div>
                <div className={classes.right}>
                    &copy; {1900 + new Date().getYear()} , made by THAI NGUYEN
                </div>
            </div>
        </footer>
    )
}

export default Footer;