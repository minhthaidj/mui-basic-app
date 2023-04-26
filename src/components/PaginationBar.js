import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F398A9",
      contrastText: "#fff",
    },
  },
});
export default function BasicPagination() {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2} mt={3} sx={{ display: "flex", alignItems: "center" }}>
        <Pagination count={3} color="primary" />
      </Stack>
    </ThemeProvider>
  );
}
