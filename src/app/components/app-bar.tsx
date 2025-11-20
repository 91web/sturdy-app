import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
//import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import SturdyLogo from "../../assets/svg/sturdy-logo.svg";

const RootAppBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/web/about-us" },
    { text: "Courses", href: "/web/courses" },
    { text: "Contact Us", href: "/web/contact-us" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const isActive = (path: string): boolean => {
    // For home page
    if (path === "/" && pathname === "/") {
      return true;
    }
    // For other paths, check if current route starts with the navigation path
    return path !== "/" && pathname.startsWith(path);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.text}
            onClick={() => handleNavigation(item.href)}
            sx={{
              padding: "12px",
              backgroundColor: isActive(item.href) ? "#e8f5e9" : "transparent",
              "&:hover": { backgroundColor: "#f1f8e9" },
              cursor: "pointer",
            }}
          >
            <ListItemText
              primary={item.text}
              sx={{
                color: "#2C562C",
                fontWeight: isActive(item.href) ? "bold" : "normal",
                textAlign: "center",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#f2f2f2", boxShadow: "none" }}
      >
        <Toolbar>
          {/* Logo */}
          <Box
            component="img"
            sx={{
              height: 40,
              marginRight: 2,
              cursor: "pointer",
            }}
            alt="Sturdy Wings Logo"
            src={SturdyLogo.src}
            onClick={() => handleNavigation("/")}
          />

          {/* Spacer to push navigation to the right */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                onClick={() => handleNavigation(item.href)}
                sx={{
                  marginX: 1,
                  color: "#2C562C",
                  textTransform: "none",
                  fontWeight: isActive(item.href) ? "bold" : "normal",
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: isActive(item.href)
                      ? "rgba(44,86,44,0.1)"
                      : "rgba(44,86,44,0.05)",
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "block", md: "none" },
              color: "#2C562C",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
          BackdropProps: {
            sx: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          },
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            backgroundColor: "#f8f8f8",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default RootAppBar;
