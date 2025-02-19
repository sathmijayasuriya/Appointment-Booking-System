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
import SettingsIcon from "@mui/icons-material/Settings";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import { fontWeight } from "@mui/system";
export const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [authOpen, setAuthOpen] = useState(false);
  const [appointmentsOpen, setAppointmentsOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const toggleAppointmentsDropdown = () => {
    setAppointmentsOpen(!appointmentsOpen);
  };
  
  const toggleAuthDropdown = () => {
    setAuthOpen(!authOpen);
  };
  
  const listItemStyle = {
    my: 1, // Vertical margin for spacing
    ml: 3,
    color: "#344054",
    "&:hover": {
      backgroundColor: "#e3f2fd",
    },
  };

  const nestedListItemStyle = {
    pl: 4, // Left padding for sub-items
    my: 0.5,
    ml: 3,
    color: "#344054",
    "&:hover": {
      backgroundColor: "#e3f2fd",
    },
  };
  const listIconStyle = {
    fontSize: 17,
    color: "#8C93A3",
    ml: 2,
  };
  const listTextStyle = {
    fontSize: "15px !important",
    fontWeight: 400,
  };

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: open ? 300 : 100,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? 300 : 100,
            transition: "width 0.3s ease",
            overflowX: "hidden",
            pt: 3,
          },
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={listItemStyle} onClick={toggleDrawer}>
              <ListItemIcon>
                <Menu sx={listIconStyle} />
              </ListItemIcon>
              {open && <ListItemText primary="BookAPP" />}
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          {/* <List>
          {[
            { text: "Dashboard", icon: <Dashboard sx={listIconStyle}  /> },
            { text: "Calendar", icon: <CalendarToday sx={listIconStyle}  /> },
            { text: "All users", icon: <Person sx={listIconStyle}  /> },
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton sx={listItemStyle}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                {open && <ListItemText primary={item.text} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}

          <ListItem disablePadding>
            <ListItemButton sx={listItemStyle}>
              <ListItemIcon>
                <Dashboard sx={listIconStyle} />
              </ListItemIcon>
              {open && (
                <ListItemText
                  slotProps={{
                    primary: {
                      sx: listTextStyle,
                    },
                  }}
                  primary="Dashboard"
                />
              )}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={listItemStyle}>
              <ListItemIcon>
                <CalendarToday sx={listIconStyle} />
              </ListItemIcon>
              {open && (
                <ListItemText
                  slotProps={{
                    primary: {
                      sx: listTextStyle,
                    },
                  }}
                  primary="Calendar"
                />
              )}
            </ListItemButton>
          </ListItem>
          {/* appointments */}
          <ListItem disablePadding>
            <ListItemButton sx={listItemStyle} onClick={toggleAppointmentsDropdown}>
              <ListItemIcon>
                <EditCalendarIcon sx={listIconStyle} />
              </ListItemIcon>
              {open && (
                <ListItemText
                  slotProps={{
                    primary: {
                      sx: listTextStyle,
                    },
                  }}
                  primary="Appointments"
                />
              )}
              {open && (appointmentsOpen ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
          </ListItem>
          <Collapse in={appointmentsOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={nestedListItemStyle}>
                <ListItemIcon>
                  <ManageSearchIcon sx={listIconStyle} />
                </ListItemIcon>
                <ListItemText
                  slotProps={{
                    primary: {
                      sx: listTextStyle,
                    },
                  }}
                  primary="View Bookings"
                />
              </ListItemButton>

              <ListItemButton sx={nestedListItemStyle}>
                <ListItemIcon>
                  <ScheduleIcon sx={listIconStyle} />
                </ListItemIcon>
                <ListItemText
                  slotProps={{
                    primary: {
                      sx: listTextStyle,
                    },
                  }}
                  primary="Timeslots"
                />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={listItemStyle} onClick={toggleAuthDropdown}>
              <ListItemIcon>
                <Lock sx={listIconStyle} />
              </ListItemIcon>
              {open && (
                <ListItemText
                  slotProps={{
                    primary: {
                      sx: listTextStyle,
                    },
                  }}
                  primary="Authentication"
                />
              )}
              {open && (authOpen ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
          </ListItem>

          <Collapse in={authOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={nestedListItemStyle}>
                <ListItemIcon>
                  <Person sx={listIconStyle} />
                </ListItemIcon>
                <ListItemText
                  slotProps={{
                    primary: {
                      sx: listTextStyle,
                    },
                  }}
                  primary="All Users"
                />
              </ListItemButton>
              <ListItemButton sx={nestedListItemStyle}>
                <ListItemIcon>
                  <AdminPanelSettings sx={listIconStyle} />
                </ListItemIcon>
                <ListItemText
                  slotProps={{
                    primary: {
                      sx: listTextStyle,
                    },
                  }}
                  primary="All Admins"
                />
              </ListItemButton>
              <ListItemButton sx={nestedListItemStyle}>
                <ListItemIcon>
                  <PersonAdd sx={listIconStyle} />
                </ListItemIcon>
                <ListItemText
                  slotProps={{
                    primary: {
                      sx: listTextStyle,
                    },
                  }}
                  primary="Admin Register"
                />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItem disablePadding>
            <ListItemButton sx={listItemStyle}>
              <ListItemIcon>
                <SettingsIcon sx={listIconStyle} />
              </ListItemIcon>
              {open && (
                <ListItemText
                  slotProps={{
                    primary: {
                      sx: listTextStyle,
                    },
                  }}
                  primary="Settings"
                />
              )}
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};
