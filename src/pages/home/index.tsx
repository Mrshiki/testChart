import React from "react";
import { CardGrid } from "components/cardGrid";
import { Container, Grid, Skeleton, Typography } from "@mui/material";

export const Home = () => (
    <Container>
      <Typography variant="h1">
        <Skeleton />
      </Typography>
      <Grid container spacing={2}>
        <CardGrid />
        <CardGrid />
        <CardGrid />
        <CardGrid />
        <CardGrid />
        <CardGrid />
      </Grid>
    </Container>
  );
