import React from "react";
import { TextField, Button, Grid, Typography, Box, Chip } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export default function ContactForm() {
  return (
    <Box
      sx={{
        p: 5,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        alignItems: "flex-start",
      }}
    >
      {/* Left Section */}
      <Box sx={{ flex: 1 }}>
        <Chip
          icon={<EditOutlinedIcon />}
          label="Form"
          variant="outlined"
          sx={{ width: "fit-content", mb: 2 }}
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            flexWrap: "wrap",
            mb: 2,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mr: 1 }}>
            Fill out the
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "black", mr: 1 }}
          >
            form,
          </Typography>
          <Typography variant="h4" sx={{ color: "gray" }}>
            we will get back to you soon!
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="Phone"
            value="(123) 456-7890"
            InputProps={{ readOnly: true }}
            sx={{ width: 220 }}
          />
          <TextField
            label="E-mail"
            value="support@wellthymentalhealth.com"
            InputProps={{ readOnly: true }}
            sx={{ width: 280 }}
          />
        </Box>
      </Box>

      {/* Right Section - Form */}
      <Box component="form" sx={{ flex: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
              First Name*
            </Typography>
            <TextField
              fullWidth
              required
              placeholder="First Name"
              size="medium"
              sx={{ height: 56 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
              Last Name*
            </Typography>
            <TextField
              fullWidth
              required
              placeholder="Last Name"
              size="medium"
              sx={{ height: 56 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
              E-mail*
            </Typography>
            <TextField
              fullWidth
              required
              type="email"
              placeholder="example@email.com"
              size="medium"
              sx={{ height: 56 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
              Phone Number*
            </Typography>
            <TextField
              fullWidth
              required
              placeholder="+62 800234756"
              size="medium"
              sx={{ height: 56 }}
            />
          </Grid>
          <Grid item xs={12} md={12} sx={{ gridColumn: { md: "span 2" } }}>
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
              Message*
            </Typography>
            <TextField
              fullWidth
              required
              multiline
              minRows={5}
              placeholder="Leave us a message..."
              size="medium"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                "&:hover": { backgroundColor: "#333" },
              }}
            >
              Submit Inquiry
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
