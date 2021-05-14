import React from "react";

import { useStyles } from './education.styles';

const Education = props => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.section}>
                <h2 style={{ textAlign: "center" }}>Degrees</h2>
                <ul>
                    <li>
                        SOUTHERN ALBERTA INSITUTE TECHNOLOGY, CALGARY, AB, CANADA <br/>
                        <i>Diploma in Software Development, Apr 2021</i>
                        <ul>
                            <li>Honors: JASON LANG SCHOLARCHIP (GPA: 3.7/4.0)</li>
                        </ul>
                        <br></br>
                    </li>
                    <li>
                        NATIONAL INSTITUTE OF INFORMATION TECHNOLOGY, HCM, VIETNAM <br/>
                        <i>Diploma in Software Development, Dec 2014</i>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Education;