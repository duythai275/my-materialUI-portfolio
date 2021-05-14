import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: "center",
        margin: "1rem auto",
        padding: "2rem",
        // maxWidth: "1000px",
    },
    section: {
        maxWidth: "1000px",
        margin: "auto"
    },
    box: {
        boxShadow: "0 5px 5px 0 rgb(233 240 243 / 50%), 0 0 0 1px #e6ecf8",
        borderRadius: "12px",
        padding: "1rem 1.25rem 0",
        // margin: "1rem",
        height: "100%",
    },
    title: {

    },
    description: {

    },
    project: {
        margin: "1rem auto 0"
    }
}));