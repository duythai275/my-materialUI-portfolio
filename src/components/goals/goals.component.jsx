import React from "react";

import { useStyles } from './goals.styles';

const Goals = props => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.section}>
                <h2 style={{ textAlign: "center" }}>My Blogs</h2>
                <strong>INTRODUCTION TO REDUX FOR REACT</strong><br/>
                Redux is a JavaScript library for managing state. It’s most commonly used for React in order to manage states of React components more easily by taking control of states away from React components and ... <a href="https://duythai275.medium.com/introduction-to-redux-for-react-537ac3eda7b5">Read more</a>
                <br/><br/>
                <strong>APPLYING REDUX INTO REACT</strong><br/>
                Redux is a powerful integrated framework for React apps to manage their state effectively. We already knew how helpful Redux brings to the big React apps, What Redux do to manage state in React ... <a href="https://duythai275.medium.com/applying-redux-into-react-ef2b7b4ca39f">Read more</a>
            </div>
        </div>
    )
}

export default Goals;