import React from "react";

import Grid from '@material-ui/core/Grid';
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Header from "../../components/header/header.component";
import Parallax from "../../components/header/parallax.component";
import Footer from "../../components/footer/footer.component";
import Highlights from "../../components/highlights_skillset/highlights.components";
import Projects from "../../components/projects/projects.component";
import Experience from "../../components/experience/experience.component";
import Goals from "../../components/goals/goals.component";
import Education from "../../components/education/education.component";

import profile from "../../assets/img/avatar.png";

import { useStyles } from './homepage.styles';

const Description = props => {
    const classes = useStyles();

    return (
        <div className={classes.description}>
            <p>I am a junior web developer from Calgary in Canada. I have been in Canada for 2 years and have graduated in April 2021. I am looking for an opportunity to work as web developer. I am always looking to learn more and am open to taking on challenging projects.</p>
        </div>
    )
}

const Homepage = props => {
    const classes = useStyles();

    return (
        <div>
            <Header />
            <Parallax />
            <div className={classes.main}>
                <div style={{ background: "#F5F7F8" }}>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={12} md={9} lg={8}>
                            <div className={classes.profile}>
                                <div>
                                    <img src={profile} className={classes.imageClasses} alt="profile_picture" />
                                </div>
                                <div className={classes.name}>
                                    <h1 className={classes.title}>Thai D. Nguyen</h1>
                                    <h5 className={classes.subtitle}>WEB DEVELOPER</h5>
                                    <IconButton onClick={ e => window.location.href="https://www.linkedin.com/in/thaind275/" }>
                                        <LinkedInIcon />
                                    </IconButton>
                                    <IconButton onClick={ e => window.location.href="https://github.com/duythai275" }>
                                        <GitHubIcon />
                                    </IconButton>
                                </div>
                            </div>
                            <Description />
                        </Grid>
                    </Grid>
                </div>
                
                <Highlights />
                <Projects />
                
                <div className={classes.section}>
                    <Grid container justify="center" spacing={4}>
                        <Grid item xs={12} sm={12} md={12}>
                            <Experience />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Education />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Goals />
                        </Grid>
                    </Grid>
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;