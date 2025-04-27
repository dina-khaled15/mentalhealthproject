import React from "react";
import GetInTouchSection from "../components/getintouch/GetInTouchSection";
import ContactForm from "../components/form/Comesoon";
import LocationSection from "../components/location/LocationSection";

import ScheduleSection from '../components/schedual/ScheduleSection';
import CTASection from "../components/FindDocter";
import Navbar from "../components/navmodule/Navbar";
import FooterComponent from "../components/footer/contact";
import { Box } from "@mui/material";
const Contact = () => {
    return (
        <div>
            <Navbar />
            <div style={{ marginTop: "60px" }}>
                <GetInTouchSection />

                <ContactForm />
                <ScheduleSection />
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
