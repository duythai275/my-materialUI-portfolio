import React, { useState } from "react";

import Grid from '@material-ui/core/Grid';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";

import { ReactComponent as Hispvn } from "../../assets/img/companies/hispvn.svg";
import { ReactComponent as Emed } from "../../assets/img/companies/eMED.svg";
import { SvgIcon } from "@material-ui/core";

import { useStyles } from './experience.styles';

const Experience = props => {
    const classes = useStyles();

    const [active, setActive] = useState(0);

    return (
        <div>
            <div className={classes.section}>
                <h2 style={{ textAlign: "center" }}>
                    Experience
                </h2>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={3}>
                        <Tabs 
                            classes={{
                                root: classes.root,
                                fixed: classes.fixed,
                                flexContainer: classes.flexContainer,
                                indicator: classes.displayNone
                            }}
                            value={active}
                            onChange={ ( event, index ) => setActive(index) }
                        >
                            <Tab
                                label="2014 - 2018"
                                icon={<SvgIcon style={{ width: "95%", height: "90%" }} color="inherit" component={Hispvn} viewBox="0 0 4200 1200" />}
                                classes={{
                                    root: classes.pills,
                                    selected: classes.primary,
                                    wrapper: classes.tabWrapper
                                }}
                            />
                            <Tab
                                label="2013 - 2014"
                                icon={<SvgIcon style={{ width: "40%", height: "50%" }} color="inherit" component={Emed} viewBox="0 0 1800 850" />}
                                classes={{
                                    root: classes.pills,
                                    selected: classes.primary,
                                    wrapper: classes.tabWrapper
                                }}
                            />
                        </Tabs>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9}>
                        <div className={classes.contentWrapper}>
                            <SwipeableViews
                                axis={"x"}
                                index={active}
                                onChangeIndex={ ( event, index ) => setActive(index) }
                            >
                                <div className={classes.tabContent}>
                                    <strong>Position:</strong> Front End Developer / DHIS2 implementor <br/>
                                    <ul>
                                        <li>
                                            <strong>Custom Reports / Entry forms:</strong> Using HTML, CSS, jQuery to create custom reports / entry forms in DHIS2.
                                        </li>
                                        <li>
                                            <strong>Integrate / Import Data:</strong> Using Node to create scripts to get data from other systems through API, or their web portal, then importing the data into DHIS2. For integrating, setting it run in Ubuntu server by using its cron jobs.
                                        </li>
                                        <li>
                                            <strong>Apps:</strong> Using React + Redux + Electron to build data entry apps.
                                        </li>
                                        <li>
                                            <strong>Maintain Data:</strong> Using Node to fix wrong data and do other tasks in DHIS2.
                                        </li>
                                        <li>
                                            <strong>Supporting and training end users:</strong> Travel to Lao, Myanmar, Indonesia and some provinces in Vietnam to hold on training for health facilities. Support users remotely for relating users, reports and entry data issues.
                                        </li>
                                    </ul>
                                </div>
                                <div className={classes.tabContent}>
                                    <strong>Position:</strong> Techinal Supporter <br/>
                                    <ul>
                                        <li>
                                            <strong>Custom Reports:</strong> Using only HTML change report forms.
                                        </li>
                                        <li>
                                            <strong>Supporting and training end users:</strong> Travel across Vietnam to hold on training for health facilities. Support users remotely for relating users, reports and entry data issues.
                                        </li>
                                    </ul>
                                </div>
                            </SwipeableViews>
                        </div>
                    </Grid>
                </Grid>
            </div>
            
        </div>
    )
}

export default Experience;