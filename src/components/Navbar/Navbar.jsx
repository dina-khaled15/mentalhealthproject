import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google";
import MicrosoftIcon from "@mui/icons-material/Window";
import PeopleIcon from "@mui/icons-material/People";
import TranslateIcon from "@mui/icons-material/Translate";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {AppBar, Toolbar,Typography, Button,Box,Container,Dialog,DialogTitle, DialogContent,DialogActions,TextField,IconButton, Divider,Menu,MenuItem,Tooltip,CircularProgress,Snackbar,Alert,} from "@mui/material";
import styles from "./Navbar.module.css";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

const Navbar = () => {
  
  const navigate = useNavigate();
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const location = useLocation();
  const currentPath = location.pathname;
  
  const [loginFormData, setLoginFormData] = useState({ email: "", password: "",});
  const [registerFormData, setRegisterFormData] = useState({ name: "", email: "", password: "", confirmPassword: "", phone: "", location: "", postalCode: "", }); 
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  
  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
  ];
  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const response = await axios.get(`${API_URL}/api/auth/me`, config);
          if (response.data.success) {
            setIsAuthenticated(true);
            setIsLoggedIn(true); 
            setUserData(response.data.data);
            setUser(response.data.data); 
          }
        } catch (err) {
          localStorage.removeItem("token");
          setIsAuthenticated(false);
          setIsLoggedIn(false); 
        }
      }
    };

    checkAuthStatus();
    
    const match = document.cookie.match(/googtrans=\/[a-z]{2}\/([a-z]{2})/);
    if (match && match[1] === "ar") {
      setCurrentLanguage("العربية");
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
    } else {
      setCurrentLanguage("English");
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "en");
    }
  }, []);

  const handleLanguageMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (languageCode, languageName) => {
    setCurrentLanguage(languageName);

    if (languageCode === "en") {
      
      document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    } else {
      document.cookie = `googtrans=/en/${languageCode}; path=/`;
    }
    document.documentElement.setAttribute("dir", languageCode === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", languageCode);

    window.location.reload();
    handleLanguageMenuClose();
  };
  const handleLoginOpen = () => { setOpenLogin(true);setError("");};
  const handleLoginClose = () => { setOpenLogin(false); setLoginFormData({ email: "", password: "" }); setError(""); };
  const handleRegisterOpen = () => { setOpenRegister(true);  setError("");};
  const handleRegisterClose = () => { setOpenRegister(false); setRegisterFormData({ name: "", email: "", password: "", confirmPassword: "",  phone: "", location: "",  postalCode: "",}); setError(""); };
  const handleLoginInputChange = (e) => { const { name, value } = e.target; setLoginFormData({  ...loginFormData,  [name]: value, }); };
 const handleRegisterInputChange = (e) => { const { name, value } = e.target;setRegisterFormData({ ...registerFormData,  [name]: value, });};const handleLoginSubmit = async (event) => {event.preventDefault();setLoading(true); setError("");
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        email: loginFormData.email,
        password: loginFormData.password,
      });
      
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        setUserData(response.data.user);
        setUser(response.data.user); 
        setIsAuthenticated(true);
        setIsLoggedIn(true); 
        setSuccess("Login successful!");
        handleLoginClose();
        
      }
    } catch (err) {
      console.error("Login error:", err.response?.data?.error || err.message);
      setError(err.response?.data?.error || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
 const handleRegisterSubmit = async (event) => { event.preventDefault(); setLoading(true); setError("");
  
 if (registerFormData.password !== registerFormData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    
    try {
      const response = await axios.post(`${API_URL}/api/auth/register`, {
        name: registerFormData.name,
        email: registerFormData.email,
        password: registerFormData.password,
        phone: registerFormData.phone || undefined,
        location: registerFormData.location || undefined,
        postalCode: registerFormData.postalCode || undefined,
      });
      
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        setUserData(response.data.user);
        setUser(response.data.user);
        setIsAuthenticated(true);
        setIsLoggedIn(true); 
        setSuccess("Registration successful!");
        handleRegisterClose();
        
      }
    } catch (err) {
      console.error("Registration error:", err.response?.data?.error || err.message);
      setError(err.response?.data?.error || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    console.log("Google login initiated");
    
  };

  const handleMicrosoftLogin = async () => {
    console.log("Microsoft login initiated");
  };

  const handleLogout = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/api/auth/logout`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        const data = await response.json();
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        
        setIsLoggedIn(false);
        setIsAuthenticated(false);
        setUser(null);
        setUserData(null);
        navigate('/');
        
        setSuccess("Logout successful!");
        
    } catch (error) {
        console.error('Logout error:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        
        setIsLoggedIn(false);
        setIsAuthenticated(false);
        setUser(null);
        setUserData(null);
        
        navigate('/');
    }
  };

  const handleForgotPassword = async () => {
    if (!loginFormData.email) {
      setError("Please enter your email address");
      return;
    }
    
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/api/auth/forgotpassword`, {
        email: loginFormData.email,
      });
      
      if (response.data.success) {
        setSuccess("Password reset email sent! Check your inbox.");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Failed to send reset email");
    } finally {
      setLoading(false);
    }
  };

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
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        className={styles.appBar}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters className={styles.toolbar}>
            <Box className={styles.logoContainer}>
              <LogoMain />
              <LogoCircle />
              <Typography variant="h6" className={styles.brandName}>
                wellthy
              </Typography>
            </Box>

            <Box className={styles.navLinks}>
              <Button
                component={Link}
                to="/"
                className={`${styles.navLink} ${currentPath === "/" ? styles.activeNavLink : ""
                  }`}
              >
                Home
              </Button>
              <Button
                component={Link}
                to="/about"
                className={`${styles.navLink} ${currentPath === "/about" ? styles.activeNavLink : ""
                  }`}
              >
                About us
              </Button>
              <Button
                component={Link}
                to="/doctors"
                className={`${styles.navLink} ${currentPath === "/doctors" ? styles.activeNavLink : ""
                  }`}
              >
                Doctors
              </Button>
              <Button
                component={Link}
                to="/kids"
                className={`${styles.navLink} ${currentPath === "/kids" ? styles.activeNavLink : ""
                  }`}
              >
                Kids
              </Button>
              <Button
                component={Link}
                to="/issues"
                className={`${styles.navLink} ${currentPath === "/issues" ? styles.activeNavLink : ""
                  }`}
              >
                Issues
              </Button>
              <Button
                component={Link}
                to="/pharmacies"
                className={`${styles.navLink} ${currentPath === "/pharmacies" ? styles.activeNavLink : ""
                  }`}
              >
                Pharmacies
              </Button>
              <Button
                component={Link}
                to="/contact"
                className={`${styles.navLink} ${currentPath === "/contact" ? styles.activeNavLink : ""
                  }`}
              >
                Contact us
              </Button>
              {isAuthenticated && (
                <Button
                  component={Link}
                  to="/community"
                  className={`${styles.navLink} ${currentPath === "/community" ? styles.activeNavLink : ""
                    }`}
                >
                  Community
                </Button>
              )}
            </Box>

            <Box className={styles.authContainer}>
              <Tooltip title="Change Language">
                <Button
                  className={styles.languageButton}
                  onClick={handleLanguageMenuOpen}
                  endIcon={<KeyboardArrowDownIcon />}
                  startIcon={<TranslateIcon className={styles.translateIcon} />}
                >
                  {currentLanguage}
                </Button>
              </Tooltip>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleLanguageMenuClose}
                className={styles.languageMenu}
              >
                {languages.map((lang) => (
                  <MenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code, lang.name)}
                    selected={currentLanguage === lang.name}
                  >
                    {lang.name}
                  </MenuItem>
                ))}
              </Menu>

              {isAuthenticated ? (
                <>
                  <Button
                    variant="outlined"
                    onClick={handleLogout}
                    className={styles.registerButton}
                  >
                    Logout
                  </Button>
                  <Link to="/profile" className={styles.profileLink}>
                    <PeopleIcon className={styles.profileIcon} />
                  </Link>
                </>
              ) : (
                <>
                  <Button
                    variant="outlined"
                    onClick={handleRegisterOpen}
                    className={styles.registerButton}
                  >
                    Register
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleLoginOpen}
                    className={styles.loginButton}
                  >
                    Log in
                  </Button>
                </>
              )}
                </Box>  </Toolbar> </Container></AppBar>
      {/* Login Dialog */}
      <Dialog open={openLogin} onClose={handleLoginClose} PaperProps={{ className: styles.dialogPaper }} maxWidth="xs"fullWidth >
        <Box className={styles.dialogHeader}> <DialogTitle className={styles.dialogTitle}>Log in</DialogTitle> <IconButton onClick={handleLoginClose} size="small"> <CloseIcon /> </IconButton> </Box>
        <Box className={styles.dialogLogo}> <Box className={styles.logoContainer}>  <LogoMain />  <LogoCircle />  <Typography variant="h6" className={styles.brandName}>  wellthy  </Typography> </Box> </Box>
        {error && (<Alert severity="error" sx={{ mx: 3, mt: 2 }}> {error} </Alert>)}
        <form onSubmit={handleLoginSubmit}>
          <DialogContent className={styles.dialogContent}>
            <TextField autoFocus margin="dense" label="Email"  type="email"  fullWidth variant="outlined" required  className={styles.textField} name="email" value={loginFormData.email} onChange={handleLoginInputChange}/>
            <TextField margin="dense" label="Password" type="password" fullWidth variant="outlined" required className={styles.textField} name="password" value={loginFormData.password} onChange={handleLoginInputChange}/>
            <Typography  variant="body2"  className={styles.forgotPassword} onClick={handleForgotPassword} sx={{ cursor: 'pointer' }}> Forgot password? </Typography></DialogContent>
          <DialogActions className={styles.dialogActions}><Button type="submit" variant="contained" fullWidth className={styles.submitButton} disabled={loading} > {loading ? <CircularProgress size={24} color="inherit" /> : "Log in"} </Button> </DialogActions>
        </form>

      <Box className={styles.dividerContainer}> <Divider className={styles.divider}> <Typography variant="body2" className={styles.dividerText}>  OR </Typography></Divider> </Box>

      <Box className={styles.socialButtonsContainer}>
      <Button variant="outlined" startIcon={<GoogleIcon />} onClick={handleGoogleLogin} className={styles.socialButton}  disabled={loading}>  Continue with Google</Button>
      <Button variant="outlined"  startIcon={<MicrosoftIcon />}  onClick={handleMicrosoftLogin}  className={styles.socialButton} disabled={loading} >  Continue with Microsoft </Button></Box>
      <Box className={styles.dialogFooter}><Typography variant="body2" className={styles.switchAuthText}>  Don't have an account?{" "} <span className={styles.switchAuthLink}  onClick={() => { handleLoginClose();  handleRegisterOpen(); }} >  Register   </span>  </Typography> </Box> </Dialog>
      {/* Register Dialog */}
      <Dialog  open={openRegister}  onClose={handleRegisterClose} PaperProps={{ className: styles.dialogPaper }}  maxWidth="xs"  fullWidth>
        <Box className={styles.dialogHeader}> <DialogTitle className={styles.dialogTitle}>  Create an account  </DialogTitle>  <IconButton onClick={handleRegisterClose} size="small">  <CloseIcon />  </IconButton> </Box>
        <Box className={styles.dialogLogo}> <Box className={styles.logoContainer}>  <LogoMain />  <LogoCircle /> <Typography variant="h6" className={styles.brandName}>  wellthy  </Typography>  </Box></Box>
       {error && (  <Alert severity="error" sx={{ mx: 3, mt: 2 }}>   {error}  </Alert> )}

        <form onSubmit={handleRegisterSubmit}>
          <DialogContent className={styles.dialogContent}>
            <TextField  autoFocus  margin="dense"  label="Full Name"  type="text" fullWidth variant="outlined" required  className={styles.textField}  name="name"  value={registerFormData.name}  onChange={handleRegisterInputChange}/>
            <TextField  margin="dense" label="Email" type="email"  fullWidth  variant="outlined"  required  className={styles.textField}  name="email"  value={registerFormData.email} onChange={handleRegisterInputChange} />
            <TextField margin="dense"  label="Password"  type="password" fullWidth variant="outlined" required  className={styles.textField}  name="password"  value={registerFormData.password}  onChange={handleRegisterInputChange} />
            <TextField  margin="dense"  label="Confirm Password"  type="password"  fullWidth variant="outlined" required  className={styles.textField}  name="confirmPassword"  value={registerFormData.confirmPassword}  onChange={handleRegisterInputChange} />
            <TextField  margin="dense"  label="Phone Number (Optional)" type="tel" fullWidth  variant="outlined"  className={styles.textField}  name="phone"  value={registerFormData.phone}  onChange={handleRegisterInputChange}  />
            <TextField margin="dense" label="Location (Optional)" type="text" fullWidth variant="outlined" className={styles.textField} name="location" value={registerFormData.location}  onChange={handleRegisterInputChange} />
            <TextField  margin="dense" label="Postal Code (Optional)" type="text" fullWidth variant="outlined" className={styles.textField} name="postalCode" value={registerFormData.postalCode} onChange={handleRegisterInputChange}/>
          </DialogContent> <DialogActions className={styles.dialogActions}><Button type="submit" variant="contained" fullWidth className={styles.submitButton} disabled={loading} >  {loading ? <CircularProgress size={24} color="inherit" /> : "Register"}  </Button></DialogActions>
        </form>

        <Box className={styles.dividerContainer}> <Divider className={styles.divider}> <Typography variant="body2" className={styles.dividerText}>  OR </Typography> </Divider> </Box>
        <Box className={styles.socialButtonsContainer}>
          <Button variant="outlined" startIcon={<GoogleIcon />}onClick={handleGoogleLogin}className={styles.socialButton} disabled={loading}> Continue with Google</Button>
          <Button variant="outlined" startIcon={<MicrosoftIcon />} onClick={handleMicrosoftLogin}className={styles.socialButton}disabled={loading}> Continue with Microsoft  </Button></Box>
        <Box className={styles.dialogFooter}> <Typography variant="body2" className={styles.switchAuthText}>Already have an account?{" "}<span className={styles.switchAuthLink}onClick={() => { handleRegisterClose(); handleLoginOpen(); }} > Log in</span> </Typography> </Box></Dialog>
      {/* Success Snackbar */}
      <Snackbar open={!!success} autoHideDuration={6000} onClose={() => setSuccess("")}anchorOrigin={{ vertical: "bottom", horizontal: "center" }}><Alert onClose={() => setSuccess("")} severity="success" sx={{ width: "100%" }}> {success} </Alert></Snackbar>
    </>
  );
};

export default Navbar;