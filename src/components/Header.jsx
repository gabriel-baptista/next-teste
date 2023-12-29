import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      backgroundColor="#f2f2f2"
    >
      {/* SEARCH BAR */}
      <Box display="flex" backgroundColor="#ffffff" borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon style={{ color: "#1976d2" }} />
        </IconButton>
      </Box>
      {/* ICONS */}
      <Box display="flex">
        <IconButton style={{ color: "#1976d2" }}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton style={{ color: "#1976d2" }}>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton style={{ color: "#1976d2" }}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
