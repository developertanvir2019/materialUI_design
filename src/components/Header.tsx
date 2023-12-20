import { ShoppingCartCheckout } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Header = () => {
  const [value, setValue] = useState();
  return (
    <AppBar
      sx={{
        backgroundImage: `linear-gradient(90deg, rgba(32,36,0,0.6208695652173912) 0%, rgba(110,9,121,1) 32%, rgba(9,110,54,1) 65%, rgba(142,88,8,0.29222111207764356) 100%, rgba(0,212,255,1) 100%)`,
      }}
    >
      <Toolbar>
        <Grid container sx={{ placeItems: "center" }}>
          <Grid item xs={2}>
            <Typography>
              <ShoppingCartCheckout />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Tabs
              value={value}
              onChange={(e, value) => setValue(value)}
              textColor="inherit"
              indicatorColor="secondary"
              // aria-label="secondary tabs example"
            >
              <Tab label="Products" />
              <Tab label="Overview" />
              <Tab label="Pricing" />
            </Tabs>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={3}>
            <Box display="flex">
              <Button
                sx={{ marginLeft: "auto", background: "rgba(180,58,58,1)" }}
                variant="contained"
              >
                Login
              </Button>
              <Button
                sx={{ marginLeft: 1, background: "rgba(180,58,58,1)" }}
                variant="contained"
              >
                SignUp
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
