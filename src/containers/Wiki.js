import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import axios from "axios";
import { RICKI_API_URL } from "../config";
import RickiCard from "../components/RickiCard";

export default function Wiki() {
  const [rickiData, setRickiData] = useState([null]);
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
        <Grid container spacing={2}>
          {rickiData.map((character) => {
            return <RickiCard character={character} image={character.url} />;
          })}
        </Grid>
      ) : (
        <CircularProgress style={{ marginTop: 100 }} />
      )}
    </Box>
  );
}
