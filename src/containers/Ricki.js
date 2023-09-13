import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import axios from "axios";
import { RICKI_API_URL } from "../config";
import RickiCard from "../components/RickiCard";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(({ theme }) => ({
  rickiContainer: {
    textAlign: "center",
    padding: "70px 10px 0px 10px",
    color: "rbg(68,68,68)",
  },
}));

export default function Wiki() {
  const classes = useStyles();
  const [rickiData, setRickiData] = useState([]);
  useEffect(() => {
    axios.get(RICKI_API_URL).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        const { results } = response.data;
        let newRickiData = [];
        results.forEach((character, index) => {
          index++;
          let rickiObject = {
            id: index,
            url: character.image,
            name: character.name,
          };
          newRickiData.push(rickiObject);
        });
        setRickiData(newRickiData);
      }
    });
  }, []);
  return (
    <Box>
      {rickiData ? (
        <Grid container spacing={2} className={classes.rickiContainer}>
          {rickiData.map((character) => {
            return (
              <RickiCard
                character={character}
                image={character.url}
                key={character.id}
              />
            );
          })}
        </Grid>
      ) : (
        <CircularProgress style={{ marginTop: 100 }} />
      )}
    </Box>
  );
}
