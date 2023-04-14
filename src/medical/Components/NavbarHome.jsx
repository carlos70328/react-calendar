import React, { useState } from "react";
import { useAuthStore } from "../../hooks";
import { Link } from 'react-router-dom'
import Logo from "../Assets/MAYRA-LOGO.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";


const NavbarHome = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { status, checkAuthToken } = useAuthStore();
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Servicios",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },

  ];

  const handleClickNew = () => {

  }

  return (
    <nav>
      <div className=" nav-logo-container">
        <img className="img-fluid" src={Logo} alt="" width="200" />
      </div>
      <div id="menu" className="navbar-links-container">
        <a href="#hero">Inicio</a>
        <a href="#about">Quienes somos</a>
        <a href="#services">Servicios</a>
        <a href="#appointment">Contacto</a>
        <a href="#faq">Preguntas Frecuentes</a>

        {status !== "authenticated" ?
          <Link className="btn btn-primary text-white " to={`./auth/login`}>
            Inicia sesion
          </Link>
          :
          <Link className="btn btn-primary text-white " to={`./calendar`}>
            Calendario
          </Link>
        }

      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default NavbarHome;