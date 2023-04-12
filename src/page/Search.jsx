import React, { useState } from "react";
import {
  TextField,
  Paper,
  Box,
  Stack,
  Button,
  Typography,
} from "@mui/material";

export const Search = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 0, sm: 2 }}
      sx={{ flexGrow: 1, padding: "20px 10px" }}
    >
      <Paper
        sx={{
          flexGrow: 1,
          mb: { xs: 2, sm: 0 },
          padding: "5px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form style={{ width: "90%" }} onSubmit={handleSubmit}>
          <Typography>User 1</Typography>
          <Box display="flex" flexDirection="column" maxWidth="500px">
            <TextField
              label="Title"
              variant="outlined"
              margin="normal"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              label="Author"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              label="Genre"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
      <Paper sx={{ flexGrow: 1, padding: "10px" }}>
        <form style={{ width: "90%" }} onSubmit={handleSubmit}>
          <Typography>User 2</Typography>
          <Box display="flex" flexDirection="column" maxWidth="500px">
            <TextField
              label="Name"
              variant="outlined"
              margin="normal"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              label="Message"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Stack>
  );
};
