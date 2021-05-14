import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    footerClasses: {
        display: "flex",
        position: "relative",
        padding: "0.9375rem 0"
    },
    container: {
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        width: "80%"
    },
    right: {
        padding: "15px 0",
        margin: "0",
        float: "right!important"
    }
}));