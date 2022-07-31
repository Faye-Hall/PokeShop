import React from "react";
import _ from "lodash";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import { createTheme, ThemeProvider } from "@mui/material";
import { useDispatchCart } from "./Context";
const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "body2" },
          style: { fontWeight: 550, fontSize: "15px", marginLeft: "10%" },
        },
        {
          props: { variant: "subtitle2" },
          style: {
            fontWeight: 150,
            fontSize: "13.5px",
            marginTop: 3,
            letterSpacing: "1px",
            marginLeft: "10%",
          },
        },
        {
          props: { variant: "subtitle1" },
          style: {
            fontWeight: 100,
            fontSize: "18px",
            marginTop: 3,
            letterSpacing: "5px",
            marginLeft: "-10%",
          },
        },
      ],
    },
  },
});

function PokeCard({ pokemon, loading }) {
  const dispatch = useDispatchCart();
  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((each) => {
          return (
            <Grid
              item
              xs={3}
              key={Math.floor(Math.random() * 100000)}
              id={each.name}
            >
              <ThemeProvider theme={theme}>
                <Paper elevation={3}>
                  <div className="pokemon">
                    <img
                      className="poke-img"
                      src={each.sprites.front_default}
                      alt=""
                    />
                    <div className="amt">
                      <div className="amt-icons">
                        <IconButton
                          onClick={() => addToCart(each)}
                          className="ICON-BTN"
                          sx={{
                            "&:hover, &.Mui-focusVisible": {
                              backgroundColor: "seagreen",
                            },
                          }}
                        >
                          <AddIcon
                            className="add-icon"
                            sx={{ fontSize: 22 }}
                          ></AddIcon>
                        </IconButton>

                        <IconButton
                          onClick={handleRemove}
                          className="ICON-BTN"
                          sx={{
                            "&:hover, &.Mui-focusVisible": {
                              backgroundColor: "LightCoral",
                            },
                          }}
                        >
                          <RemoveIcon
                            className="remove-icon"
                            sx={{ fontSize: 22 }}
                          ></RemoveIcon>
                        </IconButton>
                      </div>
                    </div>
                  </div>
                  <Box sx={{ marginLeft: "45px" }} paddingX={1}>
                    <Typography
                      className="poke-name"
                      variant="subtitle1"
                      component="h2"
                      sx={{ marginLeft: "10px" }}
                    >
                      {_.capitalize(each.name)}.
                    </Typography>
                    <Box>
                      <Typography
                        className="price"
                        variant="body2"
                        component="p"
                      >
                        {each.base_experience.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </Typography>
                      <Typography variant="subtitle2" component="p">
                        Type: {_.capitalize(each.types[0].type.name)}
                      </Typography>
                      <Typography variant="subtitle2" component="p">
                        Height: {each.height}''
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        component="p"
                        sx={{ paddingBottom: "5px" }}
                      >
                        Weight: {each.weight}lbs
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </ThemeProvider>
            </Grid>
          );
        })
      )}
    </>
  );
}

export default PokeCard;
