import React from "react";

import Grid from '@material-ui/core/Grid';

import img_react from '../../assets/img/frontend/react.png';
import img_redux from '../../assets/img/frontend/redux.png';
import img_electron from '../../assets/img/frontend/electron.png';
import img_node from '../../assets/img/frontend/node.png';
import img_materialui from '../../assets/img/frontend/materialUI.png';
import img_spring from '../../assets/img/frontend/spring.png';
import img_java from '../../assets/img/frontend/java.jpg';
import img_mysql from '../../assets/img/frontend/mysql.svg';
import img_postgresql from '../../assets/img/frontend/postgresql.png';
import img_github from '../../assets/img/frontend/github.jpg';
import img_aws from '../../assets/img/frontend/aws.png';
import img_express from '../../assets/img/frontend/express.png';

import { useStyles } from './highlights.styles';

const Highlights = props => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div>
                <h3>Front End Frameworks / Libraries</h3>
                <p>With 4 years experience as front end developer, I started using javascript and its libraries and frameworks for developing websites and web apps.</p>
            </div>
            <Grid container justify="center" spacing={4}>
                <Grid item xs={12} sm={6} md={3}>
                    <img src={img_react} alt="react" style={{width: "80px", height: "70px"}} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <img src={img_redux} alt="redux" style={{width: "120px", height: "90px"}} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <img src={img_electron} alt="electron"  style={{width: "200px", height: "70px"}} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <img src={img_materialui} alt="materialui" style={{width: "80px", height: "70px"}} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <img src={img_express} alt="express" style={{width: "180px", height: "70px"}} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <img src={img_node} alt="node" style={{width: "80px", height: "70px"}} />
                </Grid>
            </Grid>
            <div>
                <h3>Back End Frameworks / Programming Languages / SQL</h3>
                <p>I have spent 2 years at SAIT (Southern Alberta Information Technology) studying Software Development. I developed the school projects by using Java, Spring and SQL tools.</p>
            </div>
            <Grid container justify="center" spacing={4}>
                <Grid item xs={12} sm={6} md={3}>
                    <img src={img_java} alt="java" style={{width: "100px", height: "70px"}} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <img src={img_spring} alt="spring" style={{width: "120px", height: "70px"}} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <img src={img_mysql} alt="mysql" style={{width: "120px", height: "80px"}} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <img src={img_postgresql} alt="postgresql" style={{width: "80px", height: "70px"}} />
                </Grid>
            </Grid>
            <div><h3>Other services</h3></div>
            <Grid container justify="center" spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <img src={img_github} alt="github" style={{width: "100px", height: "80px"}} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <img src={img_aws} alt="aws" style={{width: "100px", height: "80px"}} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Highlights;