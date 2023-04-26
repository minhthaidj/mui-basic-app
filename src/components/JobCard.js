import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#218B82",
      contrastText: "#fff",
    },
  },
});

export default function JobCard({ job }) {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 375,
        height: 1,
        bgcolor: "#64C7CD",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" color="white">
          {job.title}
        </Typography>
        <Typography
          sx={{
            mt: 1.5,
            mb: 1.5,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {job.skills.slice(0, 4).map((skill) => (
            <Card
              sx={{
                m: 0.2,
                pr: 0.5,
                pl: 0.5,
                bgcolor: "transparent",
                border: 1,
                borderColor: "white",
                color: "white",
              }}
            >
              {skill}
            </Card>
          ))}
        </Typography>
        <Typography variant="body2">{job.description}</Typography>
      </CardContent>
      <ThemeProvider theme={theme}>
        <CardActions>
          <Button size="small" color="primary" variant="contained">
            Learn More
          </Button>
        </CardActions>
      </ThemeProvider>
    </Card>
  );
}
