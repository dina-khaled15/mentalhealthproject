import React from "react";
import AddIcon from "@mui/icons-material/Add";
import BatteryAlertIcon from "@mui/icons-material/BatteryAlert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import FaceIcon from "@mui/icons-material/Face";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import BuildIcon from "@mui/icons-material/Build";
import SendIcon from "@mui/icons-material/Send";
import ChatIcon from "@mui/icons-material/Chat";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import GavelIcon from "@mui/icons-material/Gavel";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import LoopIcon from "@mui/icons-material/Loop";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import SchoolIcon from "@mui/icons-material/School";
import PsychologyIcon from "@mui/icons-material/Psychology";
import GroupIcon from "@mui/icons-material/Group";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SpaIcon from "@mui/icons-material/Spa";

import styles from "./BenefitsSection.module.css";

const iconMap = {
  AddIcon: <AddIcon className={styles.icon} />,
  BatteryAlertIcon: <BatteryAlertIcon className={styles.icon} />,
  FavoriteBorderIcon: <FavoriteBorderIcon className={styles.icon} />,
  TipsAndUpdatesIcon: <TipsAndUpdatesIcon className={styles.icon} />,
  FaceIcon: <FaceIcon className={styles.icon} />,
  StarOutlineIcon: <StarOutlineIcon className={styles.icon} />,
  BuildIcon: <BuildIcon className={styles.icon} />,
  SendIcon: <SendIcon className={styles.icon} />,
  ChatIcon: <ChatIcon className={styles.icon} />,
  LockOpenIcon: <LockOpenIcon className={styles.icon} />,
  GavelIcon: <GavelIcon className={styles.icon} />,
  FavoriteIcon: <FavoriteIcon className={styles.icon} />,
  FitnessCenterIcon: <FitnessCenterIcon className={styles.icon} />,
  RestaurantIcon: <RestaurantIcon className={styles.icon} />,
  SentimentDissatisfiedIcon: <SentimentDissatisfiedIcon className={styles.icon} />,
  LoopIcon: <LoopIcon className={styles.icon} />,
  LocalDrinkIcon: <LocalDrinkIcon className={styles.icon} />,
  ThermostatIcon: <ThermostatIcon className={styles.icon} />,
  AddAlertIcon: <AddAlertIcon className={styles.icon} />,
  SchoolIcon: <SchoolIcon className={styles.icon} />,
  PsychologyIcon: <PsychologyIcon className={styles.icon} />,
  GroupIcon: <GroupIcon className={styles.icon} />,
  GroupAddIcon: <GroupAddIcon className={styles.icon} />,
  SpaIcon: <SpaIcon className={styles.icon} />,
};

// Map لتحديد الأيقونات الافتراضية لكل حالة وكل فائدة بناءً على ترتيبها
const defaultIconMap = {
  Anxiety: [
    <PsychologyIcon className={styles.icon} />, // أول فائدة
    <ChatIcon className={styles.icon} />, // تاني فائدة
    <SpaIcon className={styles.icon} />, // تالت فائدة
    <LocalDrinkIcon className={styles.icon} />, // رابع فائدة
  ],
  Depression: [
    <FavoriteIcon className={styles.icon} />,
    <FaceIcon className={styles.icon} />,
    <StarOutlineIcon className={styles.icon} />,
    <TipsAndUpdatesIcon className={styles.icon} />,
  ],
  Loss: [
    <SentimentDissatisfiedIcon className={styles.icon} />,
    <LoopIcon className={styles.icon} />,
    <GroupIcon className={styles.icon} />,
    <LockOpenIcon className={styles.icon} />,
  ],
  "Stress Management": [
    <SpaIcon className={styles.icon} />,
    <FitnessCenterIcon className={styles.icon} />,
    <RestaurantIcon className={styles.icon} />,
    <ThermostatIcon className={styles.icon} />,
  ],
};

const BenefitsSection = ({ issueData }) => (
  <div className={`container ${styles.container}`}>
    <h2 className={`text-center mb-4 ${styles.title}`}>
      What will you get?
    </h2>
    <div className="row mb-3">
      {issueData.benefits.slice(0, 2).map((benefit, index) => (
        <div className="col-12 col-md-6 mb-3" key={index}>
          <div className={`d-flex align-items-start ${styles.benefitItem}`}>
            {iconMap[benefit.icon] || (defaultIconMap[issueData.title] && defaultIconMap[issueData.title][index]) || <SpaIcon className={styles.icon} />}
            <div className="ms-3">
              <h6 className={styles.benefitTitle}>
                {benefit.title.split(" ").map((word, i, arr) => (
                  <React.Fragment key={i}>
                    {word}
                    {i === arr.length - 1 ? "" : " "}
                    {i === 1 && <br />}
                  </React.Fragment>
                ))}
              </h6>
              <p className={styles.benefitDescription}>
                {benefit.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="row">
      {issueData.benefits.slice(2).map((benefit, index) => (
        <div className="col-12 col-md-6 mb-3" key={index + 2}>
          <div className={`d-flex align-items-start ${styles.benefitItem}`}>
            {iconMap[benefit.icon] || (defaultIconMap[issueData.title] && defaultIconMap[issueData.title][index + 2]) || <SpaIcon className={styles.icon} />}
            <div className="ms-3">
              <h6 className={styles.benefitTitle}>
                {benefit.title.split(" ").map((word, i, arr) => (
                  <React.Fragment key={i}>
                    {word}
                    {i === arr.length - 1 ? "" : " "}
                    {i === 1 && <br />}
                  </React.Fragment>
                ))}
              </h6>
              <p className={styles.benefitDescription}>
                {benefit.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BenefitsSection;