import "./App.css";

import { CssBaseline, Grid } from "@mui/material";

import { Container } from "@mui/system";
import HomeScreen from "./screens/HomeScreen";
import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <Container>
      <CssBaseline />
      <Grid m={2} justifyContent={"center"} container direction="row">
        <Grid item>
          <HomeScreen />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
