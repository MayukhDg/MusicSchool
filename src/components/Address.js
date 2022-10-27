import React from 'react';
import { Typography, Box, Button } from "@mui/material";

const Address = () => {
  return (
    <Box textAlign = "center" mt="10px">
<Typography gutterBottom variant="h3">Locations:</Typography>
<Typography gutterBottom variant="body1" >33, Gariahat Road (South), Kolkata- 700031</Typography>
<Typography gutterBottom variant="body1">2087, Chak Garia, Srinagar Main Road, Kolkata- 700094</Typography>
<Button sx={{mt:"10px", pb:"7px", mb:"14px"}} variant="contained"><Typography variant="button">For any information call on +91 9830995366</Typography></Button>
    </Box>
  )
}

export default Address;