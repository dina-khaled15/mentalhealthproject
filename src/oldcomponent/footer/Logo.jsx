import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Types({ variant = 'light' }) {
    const isDark = variant === 'dark';

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "300px",
                backgroundColor: isDark ? '#222222' : '#FCFCFB',
                overflow: "hidden",
                px: 2,
                width: "100%",
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontSize: { xs: "80px", md: "160px", lg: "200px" },
                    fontWeight: "bold",
                    lineHeight: "1.1",
                    letterSpacing: { xs: "15px", md: "40px", lg: "60px" },
                    color: isDark ? "white" : "black",
                    textAlign: "center",
                    width: "100%",
                }}
            >
                WELTHY
            </Typography>
        </Box>
    );
}
