import React from "react";
import { HeaderBar } from "components/headerBar";
import { Box, Toolbar } from "@mui/material";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <Box>
    <HeaderBar />
    <Box component="main">
      <Toolbar />
      {children}
    </Box>
  </Box>
);
