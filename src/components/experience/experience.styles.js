import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    // container: {
    //     margin: "30px auto",
    //     width: "90%",
    // },
    root: {
        marginTop: "20px",
        paddingLeft: "0",
        marginBottom: "0",
        overflow: "visible !important",
        lineHeight: "24px",
        textTransform: "uppercase",
        fontSize: "12px",
        fontWeight: "500",
        position: "relative",
        display: "block",
        color: "inherit",
        textAlign: "center"
    },
    fixed: {
        overflow: "visible !important"
    },
    displayNone: {
        display: "none !important"
    },
    flexContainer: {
        [theme.breakpoints.down("xs")]: {
            display: "flex",
            flexWrap: "wrap"
        },
        display: "block"
    },
    pills: {
        float: "left",
        position: "relative",
        display: "block",
        borderRadius: "30px",
        minWidth: "100px",
        textAlign: "center",
        transition: "all .3s",
        padding: "10px 15px",
        color: "#555555",
        height: "auto",
        opacity: "1",
        maxWidth: "100%",
        margin: "0 5px",
        width: "100%",
        float: "none !important",
        "& + button": {
            margin: "10px 0"
        },
        borderRadius: "4px"
    },
    primary: {
        "&,&:hover": {
            color: "#FFFFFF",
            backgroundColor: "#e91e63",
            boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)"
        }
    },
    wrapper: {
        color: "inherit",
        position: "relative",
        fontSize: "12px",
        lineHeight: "24px",
        fontWeight: "500",
        textTransform: "uppercase",
        "&,& *": {
            letterSpacing: "normal"
        }
    },
    contentWrapper: {
        marginTop: "20px"
    },
    section: {
        background: "#F5F7F8",
        padding: "20px"
    }
}));