import React from "react";
import Subject from "@/components/Subject";
import { Button, Link } from "@material-ui/core";
import Routes from "../constants/routes";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import BookmarksIcon from "@material-ui/icons/Bookmarks";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

const Materias = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <h2>
          Materias en Teachlearn <BookmarksIcon styles={{ fontSiz: 25 }} />
        </h2>
        <Button>
          <Link href={Routes.ADDSUBJECT}>
            <Button variant="contained" color="primary">
              Registrar una materia
            </Button>
          </Link>
        </Button>
        <br />
        <br />
      </div>
      <Subject />
    </>
  );
};
export default Materias;
