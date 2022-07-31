import React from "react";
import PokeCard from "./PokeCard";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

const Main = function () {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon`);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const pokeQuery = async () => {
    const response = await axios.get(url);

    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);
    getPokemon(response.data.results);
    setLoading(false);
  };

  const getPokemon = async (responseResult) => {
    responseResult.map(async (each) => {
      const results = await axios.get(each.url);
      setPokeData((dataState) => {
        dataState = [...dataState, results.data];

        dataState.sort((a, b) => (a.id > b.id ? 1 : -1));

        return dataState;
      });
    });
  };

  useEffect(() => {
    pokeQuery();
  }, [url]);

  return (
    <>
      <PokeCard pokemon={pokeData} loading={loading} />
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            marginTop: "25px",
            marginLeft: "42px",
            padding: 0,
          }}
        >
          {prevUrl && (
            <Grid>
              <Button
                sx={{
                  width: "100px",
                  marginLeft: "8px",
                  marginRight: "10px",
                }}
                variant="contained"
                onClick={() => {
                  setPokeData([]);
                  setUrl(prevUrl);
                }}
              >
                Previous
              </Button>
            </Grid>
          )}
          {nextUrl && (
            <Grid>
              <Button
                sx={{ width: "100px" }}
                variant="contained"
                onClick={() => {
                  setPokeData([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </Button>
            </Grid>
          )}
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Main;
