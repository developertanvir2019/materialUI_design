import { Button } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
};

export default Home;
