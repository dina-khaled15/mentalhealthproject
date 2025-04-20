import React from "react";
import GetInTouchSection from "../components/GetInTouchSection";
import ContactForm from "../components/Comesoon";
import LocationSection from "../components/LocationSection";
import Navbar from "../components/NavBar";
import Footer from "../components/footer/contact";
import ScheduleSection from '../components/ScheduleSection';
import CTASection from "../components/FindDocter";
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
                <Footer variant="dark" />

            </div>
        </div>
    );
};

export default Contact;
