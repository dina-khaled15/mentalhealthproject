import { Grid, useTheme } from "@mui/material";
import React from "react";
import Card from "./Card";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope, faPills } from "@fortawesome/free-solid-svg-icons";
import PaidIcon from '@mui/icons-material/Paid';

const Row1 = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Card
          icon={<AssignmentTurnedInIcon sx={{ fontSize: "30px", color: "#7e57c2" }} />}  // بنفسجي
          title={"Total Appointments"}
          subTitle={"120"}
          increase={undefined}
          data={undefined}
          scheme={undefined}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Card
          icon={<FontAwesomeIcon icon={faStethoscope} style={{ fontSize: "30px", color: "#00bcd4" }} />}  // أزرق سماوي
          title={"Available Doctors"}
          subTitle={"15"}
          increase={undefined}
          data={undefined}
          scheme={undefined}
        />
      </Grid>

      <Grid item xs={12} sm={6} sx={{ marginTop: { sm: 2 } }}>
        <Card
          icon={<FontAwesomeIcon icon={faPills} style={{ fontSize: "30px", color: "#e57373" }} />}  // أحمر فاتح
          title={"Total Medicines"}
          subTitle={"56"}
          increase={undefined}
          data={undefined}
          scheme={undefined}
        />
      </Grid>

      <Grid item xs={12} sm={6} sx={{ marginTop: { sm: 2 } }}>
        <Card
          icon={<PaidIcon sx={{ fontSize: "30px", color: "#ffb300" }} />}  // ذهبي
          title={"Total Earnings"}
          subTitle={"$34,500"}
          increase={undefined}
          data={undefined}
          scheme={undefined}
        />
      </Grid>
    </Grid>
  );
};

export default Row1;
