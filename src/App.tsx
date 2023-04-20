import React from "react";
import { Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./pages/home";
import { Graf } from "./pages/graf";

import "styles/index.css";

function App() {
  return (
    <>
      <CssBaseline />
      <DefaultLayout>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/graf" element={<Graf />} />
          </Routes>
        </div>
      </DefaultLayout>
    </>
  );
}

export default App;
