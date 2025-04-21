import React from "react";
import styles from "../Schedule/Schedule.module.css";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const scheduleData = [
  {
    day: "Monday",
    date: "August 26, 2024",
    booked: 30,
    available: 8,
    slots: [
      "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM",
      "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
    ],
  },
  {
    day: "Tuesday",
    date: "August 27, 2024",
    booked: 60,
    available: 5,
    slots: [
      "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM",
      "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
    ],
  },
  {
    day: "Wednesday",
    date: "August 28, 2024",
    booked: 80,
    available: 2,
    slots: [
      "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM",
      "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
    ],
  },
  {
    day: "Thursday",
    date: "August 29, 2024",
    booked: 0,
    available: 12,
    slots: [
      "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM",
      "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
    ],
  },
];

// Helper function to determine slot style classes
const getSlotClassName = (day, slot) => {
  if (day === "Monday") {
    if (["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"].includes(slot)) {
      return styles.greySlot;
    } else if (["1:00 PM", "2:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"].includes(slot)) {
      return styles.whiteSlot;
    } else if (slot === "3:00 PM") {
      return styles.blackSlot;
    }
  } else if (day === "Tuesday") {
    if (["9:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "7:00 PM"].includes(slot)) {
      return styles.whiteSlot;
    } else if (["8:00 AM", "10:00 AM", "11:00 AM", "5:00 PM", "6:00 PM", "8:00 PM"].includes(slot)) {
      return styles.greySlot;
    }
  } else if (day === "Wednesday") {
    if (["1:00 PM", "4:00 PM"].includes(slot)) {
      return styles.whiteSlot;
    } else {
      return styles.greySlot;
    }
  } else if (day === "Thursday") {
    return styles.whiteSlot;
  }
  
  return "";
};

export default function BookingSchedule() {
  const chunkSlots = (slots, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < slots.length; i += chunkSize) {
      chunks.push(slots.slice(i, i + chunkSize));
    }
    return chunks;
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <button className={styles.bookButton}>
          <RocketLaunchIcon className={styles.rocketIcon} />
          Book Session
        </button>
        <h1 className={styles.heading}>
          Reserve Your Spot!<br />We've Got a Schedule <br />for You
        </h1>
        <p className={styles.subHeading}>
          Our upcoming counseling sessions, designed to<br /> support your mental health journey
        </p>
      </div>

      <div className={styles.content}>
        {scheduleData.map((day, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.dayDate}>
                  {day.day} - {day.date}
                </div>
                <div className={styles.bookingStatus}>
  <div className={styles.progressBarContainer}>
    <div 
      className={styles.progressBar} 
      style={{ width: `${day.booked}%` }} />
  </div>
  <span className={`${styles.bookingPercentage} ${styles.percentage}`}>
    {day.booked}%
  </span>
  <span className={styles.bookingText}>
    Booked
  </span>
</div>

              </div>

              <div className={styles.availableSlotsInfo}>
                <span className={styles.availableNumber}>
                  {day.available}
                </span>
                Available Time Slots
              </div>

              <div className={styles.slotsContainer}>
                {chunkSlots(day.slots, 6).map((slotChunk, i) => (
                  <div className={styles.slotRow} key={i}>
                    {slotChunk.map((slot, j) => (
                      <div 
                        key={j} 
                        className={`${styles.slot} ${getSlotClassName(day.day, slot)}`}
                      >
                        {slot}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div className={styles.bookButtonContainer}>
                <button 
                  className={`${styles.bookSessionButton} ${day.day === "Monday" ? styles.activeBookButton : ""}`}
                >
                  Book Session
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
