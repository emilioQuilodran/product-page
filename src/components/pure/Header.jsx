import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Button, IconButton, Drawer, Link, MenuItem } from "@mui/material"
import { Link as RouterLink } from "react-router-dom";
import { HeaderStyle, Typography, ProfilePic } from "../styles/Header.styled"
import { ThemeProvider } from "styled-components";
import { themeLight } from '../styles/Theme.styled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const headerData = [
    {
        label: "Collections",
        href: "/collections"
    },
    {
        label: "Men",
        href: "/men"
    },
    {
        label: "Women",
        href: "/women"
    },
    {
        label: "about",
        href: "/about"
    },
    {
        label: "Contact",
        href: "/contact"
    }
]

export const Header = () => {
    const [state, setstate] = useState({
        mobileView: false,
        drawerOpen: false,
    })
    const { mobileView, drawerOpen } = state
    
    useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 680
            ? setstate((prevState) => ({ ...prevState, mobileView: true }))
            : setstate((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
        return () => {
          window.removeEventListener("resize", () => setResponsiveness());
        };
      }, []);
    
    const displayDesktop = () => {
        return (
            <Toolbar style={
              {
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "1080px",
                margin: "0 auto",
                }
              }
            >
              {sneakersLogo}
              <div>{getMenuButtons()}</div>
              <div style={{display: "flex", gap: "10px"}}>
                <ShoppingCartIcon />
                <ProfilePic></ProfilePic>
              </div>
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setstate((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setstate((prevState) => ({ ...prevState, drawerOpen: false }));
        return (
            <Toolbar style={
              {
                display: "flex",
                justifyContent: "space-between",
                }
              }>
                <div style={{display: "flex"}}>
                  <IconButton
                    {...{
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <div>{sneakersLogo}</div>
                </div>
                <div style={{display: "flex", gap: "10px"}}>
                  <ShoppingCartIcon />
                  <ProfilePic />
                </div>
                <Drawer
                  {...{
                      anchor: "left",
                      open: drawerOpen,
                      onClose: handleDrawerClose,
                  }}
                >
                  <div style={{width: "250px"}}>
                    {getDrawerChoices()}
                  </div>
                </Drawer>
            </Toolbar>
        )
    }

    const getDrawerChoices = () => {
        return headerData.map(({ label, href }) => {
          return (
            <Link
              {...{
                component: RouterLink,
                to: href,
                color: "inherit",
                style: { textDecoration: "none" },
                key: label,
              }}
            >
              <MenuItem>{label}</MenuItem>
            </Link>
          );
        });
    };

    const sneakersLogo = (
        <Typography>
          sneakers
        </Typography>
    );
    
    const getMenuButtons = () => {
        return headerData.map(({ label, href }) => {
          return (
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
                // className: menuButton
              }}
            >
              {label}
            </Button>
          );
        });
    };
      
    return (
      <ThemeProvider theme={themeLight}>
        <AppBar>
          <HeaderStyle>
            {mobileView ? displayMobile() : displayDesktop()}
          </HeaderStyle>
        </AppBar>
      </ThemeProvider>
      
    )
}
