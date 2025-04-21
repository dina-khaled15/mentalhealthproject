import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google";
import MicrosoftIcon from "@mui/icons-material/Window";
import PeopleIcon from '@mui/icons-material/People';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Divider,
} from "@mui/material";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const handleLoginOpen = () => {
    setOpenLogin(true);
  };

  const handleLoginClose = () => {
    setOpenLogin(false);
  };

  const handleRegisterOpen = () => {
    setOpenRegister(true);
  };

  const handleRegisterClose = () => {
    setOpenRegister(false);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log("Login submitted");
    handleLoginClose();
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // Add your registration logic here
    console.log("Registration submitted");
    handleRegisterClose();
  };

  const handleGoogleLogin = () => {
    // Add Google login logic here
    console.log("Google login initiated");
  };

  const handleMicrosoftLogin = () => {
    // Add Microsoft login logic here
    console.log("Microsoft login initiated");
  };

  // Logo SVG components for reuse
  const LogoMain = () => (
    <Box
      component="span"
      dangerouslySetInnerHTML={{
        __html: `<svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1.02184C8.14076 -1.12007 16.4818 3.52592 18.6301 11.3989L22.6615 26.1723C23.7357 30.1088 21.3068 34.1681 17.2364 35.2391C13.166 36.31 8.9955 33.987 7.92132 30.0505L0 1.02184Z" fill="#222222" />
      <path d="M19.0764 1.02184C27.2176 -1.11826 35.5605 3.52879 37.7107 11.4013L41.7454 26.1738C42.8205 30.11 40.3921 34.1685 36.3215 35.2385C32.2509 36.3086 28.0795 33.985 27.0044 30.0488L19.0764 1.02184Z" fill="#222222" />
      </svg>`,
      }}
    />
  );

  const LogoCircle = () => (
    <Box
      component="span"
      dangerouslySetInnerHTML={{
        __html: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.36539 17.5C14.1343 17.5 18.0003 13.6944 18.0003 9C18.0003 4.30558 14.1343 0.5 9.36539 0.5C4.59645 0.5 0.730469 4.30558 0.730469 9C0.730469 13.6944 4.59645 17.5 9.36539 17.5ZM8.14681 4.2C8.14681 3.53726 8.6926 3 9.36586 3C10.0391 3 10.5849 3.53726 10.5849 4.2V6.6C10.5849 7.26274 10.0391 7.8 9.36586 7.8C8.6926 7.8 8.14681 7.26274 8.14681 6.6V4.2ZM4.48967 10.2C3.81641 10.2 3.27062 9.66274 3.27062 9C3.27062 8.33726 3.81641 7.8 4.48967 7.8H6.92776C7.60103 7.8 8.14681 8.33726 8.14681 9C8.14681 9.66274 7.60102 10.2 6.92776 10.2H4.48967ZM14.2421 10.2C14.9153 10.2 15.4611 9.66274 15.4611 9C15.4611 8.33726 14.9153 7.8 14.2421 7.8H11.804C11.1307 7.8 10.5849 8.33726 10.5849 9C10.5849 9.66274 11.1307 10.2 11.804 10.2H14.2421ZM10.5849 13.8C10.5849 14.4627 10.0391 15 9.36586 15C8.6926 15 8.14681 14.4627 8.14681 13.8V11.4C8.14681 10.7373 8.6926 10.2 9.36586 10.2C10.0391 10.2 10.5849 10.7373 10.5849 11.4V13.8Z" fill="#222222"/>
      </svg>`,
      }}
    />
  );

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0} className={styles.appBar}>
        <Container maxWidth="lg">
          <Toolbar disableGutters className={styles.toolbar}>
            {/* Logo and wellthy on the far left */}
            <Box className={styles.logoContainer}>
              <LogoMain />
              <LogoCircle />
              <Typography variant="h6" className={styles.brandName}>
                wellthy
              </Typography>
            </Box>

            {/* Navigation in the middle */}
            <Box className={styles.navLinks}>
              <Button component={Link} to="/" className={styles.activeNavLink}>
                Home
              </Button>
              <Button component={Link} to="/about" className={styles.navLink}>
                About us
              </Button>
              <Button component={Link} to="/doctors" className={styles.navLink}>
                Doctors
              </Button>
              <Button component={Link} to="/kids" className={styles.navLink}>
                Kids
              </Button>
              <Button component={Link} to="/issues" className={styles.navLink}>
                Issues
              </Button>
              <Button component={Link} to="/pharmacies" className={styles.navLink}>
                Pharmacies
              </Button>
              <Button component={Link} to="/contact" className={styles.navLink}>
                Contact us
              </Button>
            </Box>

            {/* Login / Register / Profile Icon on the far right */}
            <Box className={styles.authContainer}>
              <Button variant="outlined" onClick={handleRegisterOpen} className={styles.registerButton}>
                Register
              </Button>
              <Button variant="contained" onClick={handleLoginOpen} className={styles.loginButton}>
                Log in
              </Button>
              <Link to="/profile" className={styles.profileLink}>
                <PeopleIcon className={styles.profileIcon} />
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Login Modal */}
      <Dialog
        open={openLogin}
        onClose={handleLoginClose}
        PaperProps={{
          className: styles.dialogPaper,
        }}
        maxWidth="xs"
        fullWidth
      >
        <Box className={styles.dialogHeader}>
          <DialogTitle className={styles.dialogTitle}>
            Log in
          </DialogTitle>
          <IconButton onClick={handleLoginClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Logo in Login Modal */}
        <Box className={styles.dialogLogo}>
          <Box className={styles.logoContainer}>
            <LogoMain />
            <LogoCircle />
            <Typography variant="h6" className={styles.brandName}>
              wellthy
            </Typography>
          </Box>
        </Box>

        <form onSubmit={handleLoginSubmit}>
          <DialogContent className={styles.dialogContent}>
            <TextField
              autoFocus
              margin="dense"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              required
              className={styles.textField}
            />
            <TextField
              margin="dense"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              required
              className={styles.textField}
            />
            <Typography
              variant="body2"
              className={styles.forgotPassword}
            >
              Forgot password?
            </Typography>
          </DialogContent>
          <DialogActions className={styles.dialogActions}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className={styles.submitButton}
            >
              Log in
            </Button>
          </DialogActions>
        </form>

        {/* Social login options */}
        <Box className={styles.dividerContainer}>
          <Divider className={styles.divider}>
            <Typography
              variant="body2"
              className={styles.dividerText}
            >
              OR
            </Typography>
          </Divider>
        </Box>

        <Box className={styles.socialButtonsContainer}>
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={handleGoogleLogin}
            className={styles.socialButton}
          >
            Continue with Google
          </Button>
          <Button
            variant="outlined"
            startIcon={<MicrosoftIcon />}
            onClick={handleMicrosoftLogin}
            className={styles.socialButton}
          >
            Continue with Microsoft
          </Button>
        </Box>

        <Box className={styles.dialogFooter}>
          <Typography variant="body2" className={styles.switchAuthText}>
            Don't have an account?{" "}
            <span
              className={styles.switchAuthLink}
              onClick={() => {
                handleLoginClose();
                handleRegisterOpen();
              }}
            >
              Register
            </span>
          </Typography>
        </Box>
      </Dialog>

      {/* Register Modal */}
      <Dialog
        open={openRegister}
        onClose={handleRegisterClose}
        PaperProps={{
          className: styles.dialogPaper,
        }}
        maxWidth="xs"
        fullWidth
      >
        <Box className={styles.dialogHeader}>
          <DialogTitle className={styles.dialogTitle}>
            Create an account
          </DialogTitle>
          <IconButton onClick={handleRegisterClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Logo in Register Modal */}
        <Box className={styles.dialogLogo}>
          <Box className={styles.logoContainer}>
            <LogoMain />
            <LogoCircle />
            <Typography variant="h6" className={styles.brandName}>
              wellthy
            </Typography>
          </Box>
        </Box>

        <form onSubmit={handleRegisterSubmit}>
          <DialogContent className={styles.dialogContent}>
            <TextField
              autoFocus
              margin="dense"
              label="Full Name"
              type="text"
              fullWidth
              variant="outlined"
              required
              className={styles.textField}
            />
            <TextField
              margin="dense"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              required
              className={styles.textField}
            />
            <TextField
              margin="dense"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              required
              className={styles.textField}
            />
            <TextField
              margin="dense"
              label="Confirm Password"
              type="password"
              fullWidth
              variant="outlined"
              required
              className={styles.textField}
            />
          </DialogContent>
          <DialogActions className={styles.dialogActions}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className={styles.submitButton}
            >
              Register
            </Button>
          </DialogActions>
        </form>

        {/* Social register options */}
        <Box className={styles.dividerContainer}>
          <Divider className={styles.divider}>
            <Typography
              variant="body2"
              className={styles.dividerText}
            >
              OR
            </Typography>
          </Divider>
        </Box>

        <Box className={styles.socialButtonsContainer}>
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={handleGoogleLogin}
            className={styles.socialButton}
          >
            Continue with Google
          </Button>
          <Button
            variant="outlined"
            startIcon={<MicrosoftIcon />}
            onClick={handleMicrosoftLogin}
            className={styles.socialButton}
          >
            Continue with Microsoft
          </Button>
        </Box>

        <Box className={styles.dialogFooter}>
          <Typography variant="body2" className={styles.switchAuthText}>
            Already have an account?{" "}
            <span
              className={styles.switchAuthLink}
              onClick={() => {
                handleRegisterClose();
                handleLoginOpen();
              }}
            >
              Log in
            </span>
          </Typography>
        </Box>
      </Dialog>
    </>
  );
};

export default Navbar;