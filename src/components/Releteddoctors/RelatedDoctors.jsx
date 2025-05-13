import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios"; 
import styles from "./RelatedDoctors.module.css";

const RelatedDoctors = () => {
  const [relatedDoctors, setRelatedDoctors] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    axios
      .get("http://localhost:4000/doctor") 
      .then((response) => {
        setRelatedDoctors(response.data.slice(0, 4)); 
        setLoading(false); 
      })
      .catch((err) => {
        setError("Error fetching doctors data");
        setLoading(false); 
        console.error(err);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Box className={styles.container}>
      <Box className={styles.contentWrapper}>
        <Typography variant="h4" component="h2" gutterBottom className={styles.title}>
          Related Doctors
        </Typography>

        <Box className={styles.cardContainer}>
          {relatedDoctors.map((doctor) => (
            <Link key={doctor._id}  to={`/doctorDetails/${doctor._id}`} className={styles.cardLink}
            style={{ textDecoration: "none" }}>
              <Card className={styles.card}>
                <CardMedia component="img" image={doctor.avatar} alt={doctor.name} className={styles.cardImage}/>
                <CardContent>
                  <Typography variant="subtitle1" component="h3" gutterBottom className={styles.doctorName}>
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" className={styles.doctorSpecialty}>
                    {doctor.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RelatedDoctors;
