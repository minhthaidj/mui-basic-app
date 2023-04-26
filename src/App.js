import React from "react";
import SearchAppBar from "./components/SearchAppBar";
import JobCard from "./components/JobCard";
import jobs from "./jobs.json";
import { Grid } from "@mui/material";

function App() {
  return (
    <div>
      <h1>ABC</h1>
      <SearchAppBar />
      <Grid container spacing={2}>
        {jobs.slice(0, 4).map((job) => (
          <Grid key={job.id} item xs={4}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
