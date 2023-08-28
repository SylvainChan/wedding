import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <Backdrop sx={{ color: "#fff", zIndex: 100 }} open>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
