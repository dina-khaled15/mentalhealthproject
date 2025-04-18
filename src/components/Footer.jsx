import React from "react";
import {Box,Container,Grid,Typography,Link,InputBase,IconButton,Paper,} from "@mui/material";

export default function FooterComponent({ variant = "dark" }) {
    const isDark = variant === "dark";

    return (
        <Box sx={{backgroundColor: isDark ? "#222222" : "#ffffff",color: isDark ? "#ffffff" : "#000000",pt: 6,pb: 3,
            borderTop: isDark ? "none" : "1px solid #e0e0e0",}}>
                <Container>
                <Grid container spacing={8} justifyContent="space-between">
                    {/* Contact Us */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="subtitle1" fontWeight="bold"
                        sx={{ fontSize: "16px", mb: 2 ,fontFamily: "Manrope", fontSize: "16px",fontWeight: 600}}>
                            Contact Us
                        </Typography>
                        <Typography variant="body2"
                        sx={{ opacity: 0.8, mb: 1 ,fontFamily: "Manrope",lineHeight: "24px", fontSize: "16px",fontWeight: 400}}>
                            123 Wellness Way, Mindville, ST 98765
                        </Typography>
                        <Typography variant="body2"
                        sx={{ opacity: 0.8, mb: 1 ,fontFamily: "Manrope",lineHeight: "24px", fontSize: "16px",fontWeight: 400}}>
                            support@wellthymentalhealth.com
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8,fontFamily: "Manrope",fontWeight: 400}}>
                            (123) 456-7890
                        </Typography>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} sm={4} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ fontSize: "16px", mb: 2 ,fontFamily: "Manrope",fontWeight: 600}}>
                            Quick Links
                        </Typography>
                        <Grid container  spacing={6}>
                            <Grid item xs={6}>
                                {["Home", "Testimonial", "FAQ"].map((text, i) => (
                                    <Link key={i} href="#"underline="none"
                                        sx={{display: "block",mb: 1.5,fontSize: "16px",fontFamily: "Manrope",fontWeight: 400,
                                            color: isDark ? "#fff" : "#000",opacity: 0.8}}>
                                        {text}
                                    </Link>
                                ))}
                            </Grid>
                            <Grid item xs={6}>
                                {["About us", "Session", "Service"].map((text, i) => (
                                    <Link key={i} href="#" underline="none"
                                        sx={{display: "block",mb: 1.5,fontSize: "16px",fontFamily: "Manrope",fontWeight: 400,
                                            color: isDark ? "#fff" : "#000",opacity: 0.8}}>
                                        {text}
                                    </Link>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Stay Connected */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{fontSize: "16px", mb: 2, fontFamily: "Manrope",fontWeight: 600}}>
                            Stay Connected
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8, fontSize: "14px",fontFamily: "Manrope",fontWeight: 400, mb: 2, maxWidth: 300 }}>
                            Subscribe to our newsletter for the latest updates, mental health tips, and resources.
                        </Typography>
                        <Paper component="form"
                            sx={{display: "flex",alignItems: "center", borderRadius: "4px",padding: "4px 12px",px: 2,fontFamily: "Manrope",
                                fontWeight: 400,backgroundColor: "#fff",maxWidth: 350}}>
                            <InputBase 
                                sx={{ flex: 1, fontSize: "14px" }}
                                placeholder="Type your email"
                                inputProps={{ "aria-label": "email input" }}
                            />
                            <IconButton type="submit" sx={{backgroundColor: "#000",color: "#fff",borderRadius: "5px",fontFamily: "Manrope"
                            ,px: 3,fontSize: "14px","&:hover": { backgroundColor: "#333" },}}>
                                Subscribe
                            </IconButton>
                        </Paper>
                    </Grid>
                </Grid>

                {/* WELLTHY Logo*/}
                <Box mt={8} mb={4} textAlign="center">
                <Typography sx={{fontFamily: "Manrope",fontWeight: 800,fontSize: { xs: "64px", sm: "120px" },letterSpacing: "16px",
                color: "#FCFCFC",lineHeight: 1,textAlign: "center",}}>
                    WELLTHY
                </Typography>
                </Box>

                {/* Bottom Links */}
                <Box mt={2} display="flex" justifyContent="space-between"alignItems="center"flexWrap="wrap">
                    <Box display="flex" gap={3}>
                        {["Contact", "Privacy policy", "Sitemap", "Terms of Use"].map((text, i) => (
                            <Link key={i} href="#" underline="hover"
                                sx={{ fontFamily: "Manrope",fontWeight: 400,color: isDark ? "#ffffff" : "#000000",fontSize: "14px",opacity: 0.8}}>
                                {text}
                            </Link>
                        ))}
                    </Box>
                    <Typography variant="caption"
                        sx={{opacity: 0.6,fontFamily: "Manrope",fontWeight: 400,fontSize:"14px",mt: { xs: 2, sm: 0 },textAlign: "right"}}>
                        © 2024 Wellthy Mental Health. All rights reserved | by Pieterdraw.Co
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}