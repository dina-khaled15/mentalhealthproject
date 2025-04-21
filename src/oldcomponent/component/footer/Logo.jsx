
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
                minHeight: "150px",
                // backgroundColor: isDark ? '#222222' : '#FCFCFB',
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontSize: "150px",
                    fontWeight: "bold",
                    lineHeight: "128px",
                    letterSpacing: "80px",
                    color: isDark ? "white" : "black",
                    textAlign: "center",
                    position: "relative",
                    top: "1.5rem"
                }}
            >
                WELTHY
            </Typography>
        </Box>
    );
}

