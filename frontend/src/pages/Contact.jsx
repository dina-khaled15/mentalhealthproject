import React from "react";
import GetInTouchSection from "../components/GetInTouch/GetInTouch";
import PrinciplesSection from "../components/Principles/Principles";
import ContactForm from "../components/Form/Form";
import LocationSection from "../components/Location/Location";
import CTASection from "../components/FindDocter";
import Navbar from "../components/Navbar/Navbar";
import FooterComponent from "../components/footer/contact";
import { Box } from "@mui/material";
const Contact = () => {
    return (
        <div>
            <Navbar />

            <div style={{ marginTop: "60px" }} >
                
                <GetInTouchSection /> 
                

                <div className="container" >
                <ContactForm />
                </div>  
                <PrinciplesSection />
        
                <LocationSection />
                <CTASection />
                <Box sx={{ mt: 4, width: "100%" }}>
                    <FooterComponent variant="dark" />
                </Box>
            </div>
        </div>
    );
};

export default Contact;
