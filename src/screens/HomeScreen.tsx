import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import Defender from "../resources/images/defender.jpg";
import React from "react";

const HomeScreen = () => {
  return (
    <Card>
      <CardMedia image={Defender} sx={{ height: 600, width: 1200 }} />
      <CardContent>
        <Typography textAlign={"center"} variant="h5">
          Land Rover Defender Model 110
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HomeScreen;
