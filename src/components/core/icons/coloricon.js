import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
    icon: {
        color: "aqua",
        backgroundColor: "white",
        textDecoration: "none",
        "&:hover": {
            color: "white",
            backgroundColor: "aqua",
            textDecoration: "none",
        }
    }
});


function Icons(props) {
    const { classes, type } = props;

    return (
        <div className={classes.icon}>
            {type}
        </div>
    );
}

export default withStyles(styles)(Icons);