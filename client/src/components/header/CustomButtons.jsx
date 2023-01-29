import { Badge, Box, Button, styled, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider.js";

//Compenents

import LoginDialog from "../Login/LoginDialog";
import Profile from "./Profile";
import { useSelector } from "react-redux";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 auto",
  alignItems: "center",
  "& > button, &> p, &>div": {
    marginRight: 40,
    fontSize: 14,
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  color: "inherit",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)`
  color: Darkblue;
  background: #ffffff;
  text-transform: none;
  padding: 4px 30px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
`;

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);

  const { cartItems } = useSelector((state) => state.cart);

  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTop: 3, width: 140 }}>
        Start Your Business
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>

      <Container to="/cart">
        <Badge
          style={{ marginRight: 5 }}
          badgeContent={cartItems?.length}
          color="secondary"
        >
          <ShoppingCartIcon />
        </Badge>
        <Typography>Cart</Typography>
      </Container>

      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
