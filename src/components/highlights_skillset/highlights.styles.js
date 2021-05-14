import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: "center",
        margin: "-10rem auto 1rem",
        padding: "2rem"
    },
    box: {
        boxShadow: "0 5px 5px 0 rgb(233 240 243 / 50%), 0 0 0 1px #e6ecf8",
        borderRadius: "12px",
        backgroundColor: "white"
    },
    title: {
        // margin: "auto"
    },
    section: {
        padding: "1rem",
        // height: "100%",
        borderRight: "1px solid #E6ECF8"
    },
    lastSection: {
        padding: "1rem",
        // height: "100%",
        // borderRight: "1px solid #E6ECF8"
    }
}));