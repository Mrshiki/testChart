import React from "react";
import { CardItem } from "../cardItem";
import { Grid } from "@mui/material";

export const CardGrid = () => (
  <Grid item xs={12} sm={6} md={4}>
    <CardItem />
  </Grid>
);
