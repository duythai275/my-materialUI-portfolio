import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  transparent: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "transparent !important",
    position: "fixed",
    color: "#FFFFFF",
    boxShadow: "none"
  },
  appBar: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "fixed",
    color: "#555"
  },
  container: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between"
  },
  menu: {
    width: "30%",
    display: "flex",
    justifyContent: "flex-end",
    padding: "0px"
  },
  optionList: {
    padding: "0px"
  },
  optionButton: {
    color: "inherit",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "400",
    lineHeight: "20px",
    width: "100%",
    paddingTop: "10px",
    paddingBottom: "10px",
    "&:hover,&:focus": {
      color: "inherit",
      background: "rgba(200, 200, 200, 0.2)"
    }
  },
  appResponsive: {
    margin: "20px 10px"
  }
}));