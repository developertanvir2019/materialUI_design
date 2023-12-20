import { Typography, Button } from "@mui/material";
const Test = () => {
  return (
    <div>
      <Typography sx={{ color: "red" }} variant="h1">
        hello world
      </Typography>
      <Button variant="contained">first</Button>
      <Button variant="outlined">second</Button>
      <Button variant="text">third</Button>
    </div>
  );
};

export default Test;
