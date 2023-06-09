import React from "react";
import { Card, CardContent, CardHeader, Skeleton } from "@mui/material";

export const CardItem = () => (
  <Card sx={{ maxWidth: 345, m: 2 }}>
    <CardHeader
      avatar={
        <Skeleton animation="wave" variant="circular" width={40} height={40} />
      }
      action={null}
      title={
        <Skeleton
          animation="wave"
          height={10}
          width="80%"
          style={{ marginBottom: 6 }}
        />
      }
      subheader={<Skeleton animation="wave" height={10} width="40%" />}
    />
    <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
    <CardContent>
      <React.Fragment>
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width="80%" />
      </React.Fragment>
    </CardContent>
  </Card>
);
