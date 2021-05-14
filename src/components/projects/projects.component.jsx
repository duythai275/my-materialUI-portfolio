import React from "react";

import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
// import project1 from "../../assets/img/projects/HHA_Management/report.png";
// import project2 from "../../assets/img/projects/HHA_Checkinout/Checkinout.png";

import { useStyles } from './projects.styles';

const Projects = props => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h2>My Recent Projects</h2>
            <p style={{ marginBottom: "3rem" }}>Here are a few projects I've worked on recently.</p>
            <div className={classes.section}>
                <Grid container justify="center" spacing={4}>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <div className={classes.box}>
                            <div className={classes.title}><h4>HHA Store's Website</h4></div>
                            <div className={classes.description}>Using React + Redux to develop the shopping online sites with responsive designs for both browser and mobile. Deployed it on Heroku.</div>
                            <Button color="primary" className={classes.project}>See More</Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <div className={classes.box}>
                            <div className={classes.title}><h4>HHA Management App</h4></div>
                            <div className={classes.description}>Using React + Redux to develop the management app for HHA Store's website, and build it as a desktop app by Electron.</div>
                            <Button color="primary" className={classes.project}>See More</Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <div className={classes.box}>
                            <div className={classes.title}><h4>Restful API for HHA</h4></div>
                            <div className={classes.description}>Building restfulAPI for HHA website and app interacting to the database. Deployed it on Heroku and its database on AWS.</div>
                            <Button color="primary" className={classes.project}>See More</Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <div className={classes.box}>
                            <div className={classes.title}><h4>Attention App</h4></div>
                            <div className={classes.description}>Using React + Redux to develop the app for checking attendance of HHA Staff. Build the app as a desktop app by Electron.</div>
                            <Button color="primary" className={classes.project}>See More</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Projects;