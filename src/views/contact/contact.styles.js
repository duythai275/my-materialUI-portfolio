import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3",
        margin: "-120px 30px 0px",
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    section: {
        padding: "135px 2rem"
    }
}));