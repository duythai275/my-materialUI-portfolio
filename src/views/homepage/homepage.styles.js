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
    profile: {
        textAlign: "center",
        "& img": {
            maxWidth: "160px",
            width: "100%",
            margin: "0 auto",
            transform: "translate3d(0, -50%, 0)"
        }
    },
    imageClasses: {
        boxShadow: "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        borderRadius: "50% !important",
        maxWidth: "100%",
        height: "100%"
    },
    name: {
        marginTop: "-80px"
    },
    title: {
        color: "#3C4858",
        margin: "1.75rem 0 0.875rem",
        textDecoration: "none",
        fontWeight: "700",
        fontFamily: `"Roboto Slab", "Times New Roman", serif`,
        display: "inline-block",
        position: "relative",
        marginTop: "20px",
        marginBottom: "10px",
        minHeight: "32px"
    },
    subtitle: {
        fontSize: "1rem",
        textTransform: "uppercase",
        fontWeight: "500",
        marginTop: "10px",
        marginBottom: "10px"
    },
    description: {
        margin: "1.071rem 2rem 0 2rem",
        // maxWidth: "1000px",
        // color: "#999",
        textAlign: "center !important",
        fontSize: "1.35rem",
        paddingBottom: "10rem"
    },
    section: {
        padding: "40px 2rem"
    }
}));