import { useState } from "react";
import {
  Toolbar,
  Button,
  InputBase,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { IoSearch, IoMenu } from "react-icons/io5";
import styles from "./header.module.css";

export const Header = () => {
  /*open/close mobile menu:*/
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.headerApp}>
      {/* Menu desktop */}
      <div className={styles.desktopVersion}>
        <Toolbar className={styles.firstToolbar}>
          <InputBase
            placeholder="Buscar..."
            className={styles.searchBar}
            endAdornment={
              <InputAdornment position="start">
                <IoSearch className={styles.searchIcon} />
              </InputAdornment>
            }
          ></InputBase>
          <div className={styles.logo}>
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://via.placeholder.com/126x33"
              alt="logo"
            />
          </div>
          <div className={styles.buttonsContainer}>
            <Button
              variant="outlined"
              className={styles.buttonRegister}
              size="small"
            >
              Registrarse
            </Button>
            <Button
              variant="contained"
              size="small"
              className={styles.buttonLogin}
            >
              Login
            </Button>
          </div>
        </Toolbar>
        <Toolbar className={styles.secondToolbar}>
          <div className={styles.subButtonsContainer}>
            <Typography variant="button" className={styles.subButton}>
              Lorem
            </Typography>
            <Typography variant="button" className={styles.subButton}>
              Lorem
            </Typography>
            <Typography variant="button" className={styles.subButton}>
              Lorem
            </Typography>
            <Typography variant="button" className={styles.subButton}>
              Lorem
            </Typography>
            <Typography variant="button" className={styles.subButton}>
              Lorem
            </Typography>
          </div>
        </Toolbar>
      </div>
      {/* Menu mobile */}
      <div className={styles.mobileVersion}>
        <Toolbar className={styles.mobileToolbar}>
          <div className={styles.logo}>
            <img src="https://via.placeholder.com/126x33" alt="logo" />
          </div>

          <IconButton
            className={styles.menuButton}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <IoMenu color="white" fontSize="1.5em" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Registrarse</MenuItem>
            <MenuItem onClick={handleClose}>Login</MenuItem>
          </Menu>
        </Toolbar>

        <Toolbar className={styles.searchMobile}>
          <InputBase
            placeholder="Buscar..."
            className={styles.searchBarMobile}
            endAdornment={
              <InputAdornment position="end">
                <IoSearch className={styles.searchIcon} />
              </InputAdornment>
            }
          />
        </Toolbar>
      </div>
    </div>
  );
};
