import {Box,IconButton,Paper,Stack,Typography,useTheme,} from "@mui/material";
import Line from "../LineChart/Line";
import React from "react";
import { List } from "./data";

const getColorByPhrase = (phrase) => {
  switch (phrase.toLowerCase()) {
    case "available":
      return "#4CAF50";
    case "full booked":
      return "rgba(255, 0, 0, 0.8)";
    case "on duty":
      return "#2196F3";
    case "absent":
      return "#9E9E9E";
    default:
      return "#FFA726"; 
  }
};

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.2} mt={1.3}>
      <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth: "400px" }}>
        <Stack alignItems={"center"} direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
          <Box>
            <Typography mb={1} mt={2} ml={4} variant="h6"
              sx={{backgroundColor: "#F4F2ED",fontWeight: 900,fontFamily: "Manrope",fontSize: "24px",}}>
              Earning Statistics
            </Typography>
            <Typography variant="body2" ml={4} sx={{fontWeight: 900,fontFamily: "Manrope",fontSize: "24px",}}>
              Total Revenue
            </Typography>
            <Typography variant="body2" ml={4} sx={{fontWeight: 900,fontFamily: "Manrope",fontSize: "18px",color: "gray",}}>
              $129,850
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}></IconButton>
          </Box>
          </Stack>
          
          <Line isDahboard={true} />
          </Paper>
      
      <Box sx={{overflow:"auto",borderRadius:"4px",minWidth: "280px",maxHeight: 355,flexGrow: 1,backgroundColor: "#F4F2ED",}}>
        <Paper>
          <Typography p={1.2} variant="h6" color="black"
            sx={{backgroundColor: "#F4F2ED",fontWeight: 900,fontFamily: "Manrope",fontSize: "24px",}} >
            Doctor List
          </Typography>
        </Paper>
        
        {List.map((item) => {
          return (
            <Paper key={item.txId}
              sx={{mt: 0.4,display: "flex",justifyContent: "space-between",alignItems: "center",}}>
              <Box p={1.2}>
                <Typography variant="body1"
                  sx={{fontWeight: 600,color: "black",fontSize: "15px",fontFamily: "Manrope",}} >
                  {item.txId}
                </Typography>
                <Typography variant="body2"
                  sx={{fontWeight: 500,color: "grey",fontSize: "15px",fontFamily: "Manrope",}}>
                  {item.user}
                </Typography>
              </Box>
              <Box sx={{backgroundColor: getColorByPhrase(item.cost),padding: "6px 12px",borderRadius: "8px",marginRight: "12px",
                  minWidth: "110px", display: "flex",justifyContent: "center",alignItems: "center",textAlign: "center",}}>
                <Typography variant="body2"
                  sx={{color: "white",fontWeight: 500,fontSize: "16px",fontFamily: "Manrope",whiteSpace: "nowrap",}}>
                  {item.cost}
                </Typography>
              </Box>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};

export default Row2;
