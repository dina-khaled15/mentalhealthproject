const schedule = [
    {
      day: "Monday",
      date: "August 26, 2024",
      time: "9:00 AM - 12:00 PM",
      location: "Online",
      booked: 30,
      available: 8,
      slots: ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"],
      getStyle: (slot) => {
        if (["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"].includes(slot)) {
          return { backgroundColor: "#EEEEEE", color: "#B5B5B5", border: "1px solid #B5B5B5" };
        } else if (["1:00 PM", "2:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"].includes(slot)) {
          return { backgroundColor: "#fff", color: "#000", border: "1px solid #000" };
        } else if (slot === "3:00 PM") {
          return { backgroundColor: "#000", color: "#fff" };
        }
        return {};
      }
    },
    {
      day: "Tuesday",
      date: "August 27, 2024",
      time: "1:00 PM - 5:00 PM",
      location: "Wealthy Clinic",
      booked: 60,
      available: 5,
      slots: ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"],
      getStyle: (slot) => {
        const whiteSlots = ["9:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "7:00 PM"];
        const greySlots = ["8:00 AM", "10:00 AM", "11:00 AM", "5:00 PM", "6:00 PM", "8:00 PM"];
        if (whiteSlots.includes(slot)) {
          return { backgroundColor: "#fff", color: "#000", border: "1px solid #000" };
        } else if (greySlots.includes(slot)) {
          return { backgroundColor: "#EEEEEE", color: "#B5B5B5", border: "1px solid #B5B5B5" };
        }
        return {};
      }
    },
    {
      day: "Thursday",
      date: "August 29, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "Wealthy Clinic",
      booked: 0,
      available: 12,
      slots: ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"],
      getStyle: () => ({
        backgroundColor: "#fff",
        color: "#000",
        border: "1px solid #000",
      }),
    },
    {
      day: "Saturday",
      date: "August 31, 2024",
      time: "11:00 AM - 2:00 PM",
      location: "Online",
      booked: 80,
      available: 2,
      slots: ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"],
      getStyle: (slot) => {
        const whiteSlots = ["1:00 PM", "4:00 PM"];
        const greySlots = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];
        if (whiteSlots.includes(slot)) {
          return { backgroundColor: "#fff", color: "#000", border: "1px solid #000" };
        } else if (greySlots.includes(slot) || ["2:00 PM", "3:00 PM"].includes(slot)) {
          return { backgroundColor: "#EEEEEE", color: "#B5B5B5", border: "1px solid #B5B5B5" };
        }
        return {};
      }
    },
  ];
  
  export default schedule;
  