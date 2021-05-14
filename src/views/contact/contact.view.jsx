import React, { useState } from "react";

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import Header from "../../components/header/header.component";
import Parallax from "../../components/header/parallax.component";
import Footer from "../../components/footer/footer.component";

import db from "../../utils/firebase";

import { useStyles } from './contact.styles';

const Content = props => {

    const [message,setMessage] = useState({
        name: "",
        email: "",
        content: ""
    });

    const [alert, setAlert] = useState({
        open: false,
        message: ""
    });

    const send = () => {
        if ( message.name === "" || message.email === "" || message.content === "" ) {
            setAlert({
                open: true,
                message: "Please fill out all fields"
            });
        } else {
            db.collection("contacts").add({
                name: message.name,
                email: message.email,
                message: message.content,
                date: new Date()
            }).then( () => {
                setAlert({
                    open: true,
                    message: "Message has been submitted!"
                });
            }).catch( err => {
                setAlert({
                    open: true,
                    message: err.message
                });
            });
    
            setMessage({
                name: "",
                email: "",
                content: ""
            });
        }
    }

    // handle Close Notification
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlert({
            open: false,
            message: ""
        });
    }

    return (
        <div>
            <h4>Please leave me a message or contact me directly through my phone number or email if you'd like me to be a part of your team or project. I'll get back to you as soon as possible.</h4>
            <form>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField 
                            label="Your Name"
                            id="name"
                            fullWidth
                            value={message.name}
                            onChange={ e => setMessage({ ...message, name: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField 
                            label="Your Email"
                            id="email"
                            fullWidth
                            value={message.email}
                            onChange={ e => setMessage({ ...message, email: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField 
                            label="Your Messager"
                            id="message"
                            fullWidth
                            multiline
                            rows={4}
                            value={message.content}
                            onChange={ e => setMessage({ ...message, content: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Button variant="contained" color="primary" onClick={() => send()}>
                            Send Message
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={alert.open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="success" variant="filled">{alert.message}</Alert>
            </Snackbar>
        </div>
    )
}

const Contact = props => {
    const classes = useStyles();

    return (
        <div>
            <Header />
            <Parallax />
            <div className={classes.main}>
                <div className={classes.section}>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={12} md={8} lg={8}>
                            {/* <div className={classes.form}>A</div> */}
                            <h2>Connect With Me</h2>
                            <h4>LinkedIn: <a href="https://www.linkedin.com/in/thaind275/">thaind275</a></h4>
                            <h4>Email: <a href="mailto:duythai275@gmail.com">duythai275@gmail.com</a></h4>
                            <h4>Phone: <a href="tel://+14039732577">+1 (403) 973 2577</a></h4>
                            <Content />
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;