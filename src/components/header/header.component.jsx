import React, { useEffect, useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";

import { withRouter } from 'react-router-dom';

import { useStyles } from './header.styles';

const HeaderLinks = ({history}) => {
    const classes = useStyles();

    return (
        <List className={classes.menu}>
            <ListItem className={classes.optionList}>
                <Button className={classes.optionButton} onClick={() => history.push("/")}>Home</Button>
            </ListItem>
            {/* <ListItem className={classes.optionList}>
                <Button className={classes.optionButton}>Projects</Button>
            </ListItem> */}
            {/* <ListItem className={classes.optionList}>
                <Button className={classes.optionButton}>Blogs</Button>
            </ListItem> */}
            <ListItem className={classes.optionList}>
                <Button className={classes.optionButton} onClick={() => history.push("/contactme")}>Contact me</Button>
            </ListItem>
        </List>
    )
}

const Header = ({history}) => {
    const classes = useStyles();

    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect( () => {
        window.addEventListener("scroll", headerColorChange);
    });

    const headerColorChange = () => {
        const windowsScrollTop = window.pageYOffset;
        if ( windowsScrollTop > 110 ) {
            document.body.getElementsByTagName("header")[0].classList.remove(classes["transparent"]);
            document.body.getElementsByTagName("header")[0].classList.add(classes["appBar"]);
        } else {
            document.body.getElementsByTagName("header")[0].classList.remove(classes["appBar"]);
            document.body.getElementsByTagName("header")[0].classList.add(classes["transparent"]);
        }
    }

    return (
        <AppBar className={classes.transparent}>
            <Toolbar className={classes.container}>
                <Hidden smDown>
                    <div></div>
                    <HeaderLinks history={history} />
                </Hidden>
                <Hidden mdUp>
                    <div></div>
                    <IconButton color="inherit" onClick={() => setMobileOpen(true)}>
                        <Menu />
                    </IconButton>
                </Hidden>
            </Toolbar>
            <Hidden mdUp>
                <Drawer
                    anchor={"right"}
                    open={mobileOpen}
                    onClose={() => setMobileOpen(false)}
                >
                    <div className={classes.appResponsive}>
                    <List>
                        <ListItem>
                            <Button onClick={() => history.push("/")}>Home</Button>
                        </ListItem>
                        <ListItem>
                            <Button onClick={() => history.push("/contactme")}>Contact me</Button>
                        </ListItem>
                    </List>
                    </div>
                </Drawer>
            </Hidden>
        </AppBar>
    )
}

export default withRouter(Header);