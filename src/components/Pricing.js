import React from 'react'
import { Typography, Box, Stack } from "@mui/material";

const Pricing = () => {
  return (
   <Box id="pricing">
    <Stack  pb="5px" pt="2px" color="white"  bgcolor="#023020" textAlign="center" display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
      <Typography  mt="20px" variant="body1">Monthly Course: ₹1,500 (4 classes in a month)</Typography>
      <Typography gutterBottom variant="body1">Six months Course: ₹6,000 (4 classes in a month)</Typography>
      <Typography gutterBottom variant="h5">Five year Certified Course <br/> available from Chandigarh Board</Typography>
    </Stack>
     
   </Box>
  )
}

export default Pricing;
