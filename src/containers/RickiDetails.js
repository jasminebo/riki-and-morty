import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { RICKI_API_URL } from "../config";
import axios from "axios";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  rickiContainer: {
    height: "80vh",
    backgroundColor: "black",
    color: "white",
    marginTop: 75,
    textAlign: "center",
    borderRadius: 5,
    paddingTop: 30,
  },
  textTitle: {
    textTransform: "upperCase",
    fontFamily: "Fantasy",
  },
  characterImage: {
    width: "170px",
    height: "170px",
  },
  infoContainer: {
    bottom: 60,
    width: "100%",
    alignItems: "center",
    justify: "center",
  },
  separator: {
    height: "0.01mm",
    width: "90%",
    marginTop: 30,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});

function withRouter(Component) {
  function ComponentWithRouter(props) {
    let params = useParams();
    return <Component {...props} params={params} />;
  }
  return ComponentWithRouter;
}

class RickiDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: null,
    };
  }
  componentDidMount() {
    axios.get(RICKI_API_URL + "/" + this.props.params.id).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response.data);
        this.setState({ character: response.data });
      }
    });
  }
  render() {
    const { classes } = this.props;
    const { character } = this.state;
    if (character) {
      const { name, image, species, status, gender, location, origin } =
        character;
      return (
        <Box>
          <Box className={classes.rickiContainer}>
            <Typography variant="h1" className={classes.textTitle}>
              {name}
            </Typography>
            <img
              className={classes.characterImage}
              src={image}
              alt="character"
            />
            <Box className={classes.infoContainer}>
              <hr className={classes.separator} />
              <Grid container>
                <Grid item md={4}>
                  <Typography className={classes.text}>
                    <h3>Name</h3>
                    {name}
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography className={classes.text}>
                    <h3>Species</h3>
                    {species}
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography className={classes.text}>
                    <h3>Status</h3>
                    {status}
                  </Typography>
                </Grid>
                <hr className={classes.separator} />
                <Grid item md={4}>
                  <Typography className={classes.text}>
                    <h3>Gender</h3>
                    {gender}
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography className={classes.text}>
                    <h3>Location</h3>
                    {location.name}
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography className={classes.text}>
                    <h3>Origin</h3>
                    {origin.name}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      );
    } else {
      return <CircularProgress></CircularProgress>;
    }
  }
}

const detailsPage = withStyles(styles)(RickiDetails);
export default withRouter(detailsPage);
