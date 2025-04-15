import React from "react";
import Navbar from './components/Navbar'; 
import Top from './components/Top';
import Personalized from './components/Personalized';
import Vission from './components/Vission';
import Milestone from './components/Milestone';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Cta from './components/Cta';
import Footer from './components/Footer';

import { Container, Box } from "@mui/material";

function App() {
  return (
    <>
      <Navbar />

      <Container maxWidth="md">
        <Box my={4}>
          <Top />
        </Box>

        <Box my={4}>
          <Personalized />
        </Box>
      </Container>

      <Box>
        <Vission />
      </Box>

      <Box>
        <Milestone />
      </Box>

      <Box>
        <Services />
      </Box>

      <Box>
        <Pricing />
      </Box>

      <Box>
        <Cta/>
      </Box>

      <Box>
        <Footer />
      </Box>

    </>
  );
}

export default App;

// import React from "react";
// import Services from './components/Services';
// import Top from './components/Top';
// import Personalized from './components/Personalized';
// import Vission from './components/Vission';
// // import Areas from './components/Areas';
// // import Schedule from './components/Schedule';
// // import Form from './components/Form';
// // import ScheduleOverview from './components/ScheduleOverview';
// import Milestone from './components/Milestones';


//  function App() {
//    return (
//      <div>
       {/* <Top/> */}
       {/* <Services/> */}
      {/* <Personalized/> */}
          {/* <Vission/> */}
      {/* <Areas /> */}
       {/* <Schedule /> */}
      {/* <Form /> */}
{/* <ScheduleOverview/> */}


//     </div>
//    );
//  }

//  export default App;