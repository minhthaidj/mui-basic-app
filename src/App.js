import React from "react";
import SearchAppBar from "./components/SearchAppBar";
import JobCard from "./components/JobCard";
import PaginationBar from "./components/PaginationBar";
import jobs from "./jobs.json";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

function App() {
  return (
    <div>
      <SearchAppBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        mt={2}
      >
        <Grid
          container
          spacing={2}
          sx={{
            maxWidth: 1200,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          {jobs.slice(0, 5).map((job) => (
            <Grid item md={4}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <PaginationBar />
    </div>
  );
}

export default App;
