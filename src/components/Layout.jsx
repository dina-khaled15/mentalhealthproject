
import Navbar from './navBar';
import { Box } from "@mui/material";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Box mt="60px">{children}</Box>cd path/to/mental-health

        </>
    );
};

export default Layout;
