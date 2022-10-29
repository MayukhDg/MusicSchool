import React from 'react';
import { Typography, Box } from "@mui/material";
import Background from "../assets/Background.jpg";

const WhyChooseUs = () => {
  return (
    <Box sx={{backgroundImage: `url(${Background})`}} textAlign="center" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <Typography pt="5px" mt="5px" gutterBottom variant="h4"> Why Choose Us?</Typography>
      <Typography gutterBottom variant="h6"> We are patient about our student's learning curve
     </Typography>
      <Typography gutterBottom variant="h6"> We have courses for different needs</Typography>
    </Box>
  )
}

export default WhyChooseUs;
