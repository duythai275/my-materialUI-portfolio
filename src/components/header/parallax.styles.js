import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    parallax: {
        height: "380px",
        maxHeight: "1000px",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        margin: "0",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
        // filter: {
        //     "&:before": {
        //         background: "rgba(0, 0, 0, 0.5)"
        //     },
        //     "&:after,&:before": {
        //         position: "absolute",
        //         zIndex: "1",
        //         width: "100%",
        //         height: "100%",
        //         display: "block",
        //         left: "0",
        //         top: "0",
        //         content: "''"
        //     }
        // },
        // small: {
        //     height: "380px"
        // }
    }
    // filter: {
    //     "&:before": {
    //         background: "rgba(0, 0, 0, 0.5)"
    //     },
    //     "&:after,&:before": {
    //         position: "absolute",
    //         zIndex: "1",
    //         width: "100%",
    //         height: "100%",
    //         display: "block",
    //         left: "0",
    //         top: "0",
    //         content: "''"
    //     }
    // },
    // small: {
    //     height: "380px"
    // }
}));