import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import { RICKI_API_URL } from "../config";

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
        rickiData.map((character) => {
          return <h1>{character.name}</h1>;
        })
      ) : (
        <CircularProgress style={{ marginTop: 100 }} />
      )}
    </Box>
  );
}
