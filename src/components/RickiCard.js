import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(({ theme }) => ({
  card: {
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
    "&:hover": { backgroundColor: "rgb(225,225,225)" },
  },
  cardMedia: {
    margin: "auto",
    width: 130,
    height: 130,
  },
  cardContent: {
    textAlign: "center",
  },
}));

export default function RickiCard(props) {
  const classes = useStyles();
  const { character, image } = props;
  const { id, name } = character;
  return (
    <Grid item xs={12} sm={2}>
      <Card className={classes.card}>
        <CardMedia image={image} className={classes.cardMedia}></CardMedia>
        <CardContent className={classes.cardContent}>
          <Typography>{name}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
