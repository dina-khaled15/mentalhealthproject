// import { Fragment, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import QA from "./components/QA";
// import Feedback from "./components/feedback";
// import Benefit from "./components/Benefit";
// import VisionMission from "./components/vission&mission";
// import PrinciplesSection from "./components/Principles";
// import MentalHealthServices from "./components/service";
// import HealingPath from "./components/Healingpath";
// import DoctorProfile from "./components/Doctor";
// import ContactForm from "./components/Comesoon";
// import PsychologyBanner from "./page.jsx/PsychologyBanner";
// import PricingSection from "./components/PricingSection";
// import ExpertTeamSection from "./page.jsx/ExpertTeam";
// // function App() {
// //   //root "start"
// //   const [count, setCount] = useState(0);

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   );
// // }

// // js+xml=jsx => output is html from functions

// // const Form = () => {
// //   return (
// //     <form>
// //       <label htmlFor="email">Email</label>
// //       <input type="email" placeholder="email" />
// //     </form>
// //   );
// // };
// //  اي حاجة عايزاها تظهر عندي في الصفحة لازم انده علها في ال app
// const App = () => {
//   return (
//     <Fragment>
//       {/* <Feedback /> */}
//       {/* <Benefit /> */}
//       {/* <QA /> */}
//       {/* <PrinciplesSection /> */}
//       {/* <VisionMission /> */}
//       {/* <ContactForm /> */}
//       {/* <ExpertTeamSection /> */}

//       {/* dina */}
//       {/* <MentalHealthServices /> */}
//       {/* <PsychologyBanner /> */}
//       {/* <PricingSection /> */}
//       {/* <HealingPath /> */}
//       {/* <DoctorProfile /> */}
//     </Fragment>
//   );
// };
// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DoctorsPage from "./page/DocPage";
import HomePage from "./page/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctor" element={<DoctorsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
