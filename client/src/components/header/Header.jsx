import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  styled,
  IconButton,
  Drawer,
  List,
  ListItemButton,
} from "@mui/material";
import GyankulLogo from "../../resources/images/GyankulLogo.png";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";

const StyledHeader = styled(AppBar)`
  background: Darkblue;
  height: 55px;
`;

const Component = styled(Link)`
  margin-left: 10%;
`;

const CustomButtonsWrapper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const list = () => (
    <Box style={{ width: 200 }} onClick={handleClose}>
      <List>
        <ListItemButton>
          <CustomButtons/>
          
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <MenuButton style={{ color: "inherit" }} onClick={handleOpen}>
          <Menu />
        </MenuButton>

        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>

        <Component to="/">
          <img
            src={GyankulLogo}
            alt="logo"
            style={{ width: 55, marginTop: 7 }}
          />
        </Component>
        <Search />
        <CustomButtonsWrapper>
          <CustomButtons />
        </CustomButtonsWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
