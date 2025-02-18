import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
} from "@mui/material";
import {
  Menu,
  Dashboard,
  CalendarToday,
  Person,
  Lock,
  ExpandLess,
  ExpandMore,
  AdminPanelSettings,
  PersonAdd,
} from "@mui/icons-material";
import SettingsIcon from '@mui/icons-material/Settings';

export const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [authOpen, setAuthOpen] = useState(false);
  const [appointmentsOpen, setAppointmentsOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const toggleAuthDropdown = () => {
    setAppointmentsOpen(!appointmentsOpen);
    setAuthOpen(!authOpen);
  };
  const listItemStyle = {
    my: 1, // Vertical margin for spacing
  };
  
  const nestedListItemStyle = {
    pl: 4, // Left padding for sub-items
    my: 0.5, // Smaller vertical margin for sub-items
  };
  

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: open ? 240 : 60,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? 240 : 60,
            transition: "width 0.3s ease",
            overflowX: "hidden",
          },
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={toggleDrawer}>
              <ListItemIcon>
                <Menu />
              </ListItemIcon>
              {open && <ListItemText primary="TailAdmin" />}
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          {[
            { text: "Dashboard", icon: <Dashboard /> },
            { text: "Calendar", icon: <CalendarToday /> },
            { text: "All users", icon: <Person /> },
            // { text: "All users", icon: <Person /> },

            //   { text: "Forms", icon: <InsertDriveFile /> },
            //   { text: "Tables", icon: <TableChart /> },
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton sx={listItemStyle}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                {open && <ListItemText primary={item.text} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={listItemStyle} onClick={toggleAuthDropdown}>
              <ListItemIcon>
                <Lock />
              </ListItemIcon>
              {open && <ListItemText primary="Authentication" />}
              {open && (authOpen ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
          </ListItem>

          <Collapse in={authOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <AdminPanelSettings />
                </ListItemIcon>
                <ListItemText primary="All Admins" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <PersonAdd />
                </ListItemIcon>
                <ListItemText primary="Admin Register" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItem disablePadding>
            <ListItemButton sx={listItemStyle}>
              <ListItemIcon>
                <SettingsIcon /> 
              </ListItemIcon>
              {open && <ListItemText primary="Settings" />}
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};
