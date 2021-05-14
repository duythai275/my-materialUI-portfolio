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

const Frontend = props => {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.title}>
                <h3>Front End</h3>
                <p>I started using JavaScript and its libraries, frameworks <strong>jQuery, React + Redux, Node and Material UI</strong> during my working 4 years ago. Recently, I have used <strong>Electron</strong> to build desktop apps.</p>
            </div>
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={12} lg={6}> 
                        <img src={img_react} alt="react" style={{width: "80px", height: "75px"}} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={12} lg={6}> 
                        <img src={img_redux} alt="redux" style={{width: "120px", height: "75px"}} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={12} lg={6}> 
                        <img src={img_node} alt="node" style={{width: "80px", height: "75px"}} />
                    </Grid>
                    {/* <Grid item xs={12} sm={6} md={12} lg={6}> 
                        <img src={img_materialui} alt="materialui" style={{width: "80px", height: "70px"}} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6}> 
                        <img src={img_express} alt="express" style={{width: "180px", height: "70px"}} />
                    </Grid> */}
                    <Grid item xs={12} sm={6} md={12} lg={6}> 
                        <img src={img_electron} alt="electron" style={{width: "150px", height: "75px"}} />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

const Backend = props => {
    const classes = useStyles();

    return (
        <div className={classes.section}>
            <div className={classes.title}>
                <h3>Back End</h3>
                <p>I have finished the Software Development's diploma at SAIT ( Southern Alberta Information Technology ), and I developed the projects during my studying by using <strong>Java, Spring framework and SQL tools</strong>.</p>
            </div>
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={12} lg={6}> 
                        <img src={img_java} alt="java" style={{width: "120px", height: "75px"}} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={12} lg={6}> 
                        <img src={img_spring} alt="spring" style={{width: "140px", height: "75px"}} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={12} lg={6}> 
                        <img src={img_mysql} alt="mysql" style={{width: "120px", height: "75px"}} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={12} lg={6}> 
                        <img src={img_postgresql} alt="postgresql" style={{width: "90px", height: "75px"}} />
                    </Grid>
                </Grid>
            </div>
            
        </div>
    )
}

const Others = props => {
    const classes = useStyles();
    return (
        <div className={classes.lastSection}>
            <div className={classes.title}>
                <h3>Other Tools</h3>
                <p><strong>Github</strong> is the main tool I am using to collobarate and manage my team and individual projects. And I am a beginner with using <strong>AWS</strong> for deploying and hosting my websites and database.</p>
            </div>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={12} lg={6}>
                    <img src={img_github} alt="github" style={{width: "100px", height: "80px"}} />
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={6}>
                    <img src={img_aws} alt="aws" style={{width: "100px", height: "80px"}} />
                </Grid>
            </Grid>
        </div>
    )
}

const Highlights = props => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {/* <h2>My Skillset</h2> */}
            <div className={classes.box}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={4}><Frontend /></Grid>
                    <Grid item xs={12} sm={12} md={4}><Backend /></Grid>
                    <Grid item xs={12} sm={12} md={4}><Others /></Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Highlights;