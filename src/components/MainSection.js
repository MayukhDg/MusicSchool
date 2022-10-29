import React from 'react';
import { Box, Typography, Stack, Button} from "@mui/material";
import "../App.css";
import Video from "../assets/Video.mp4";
import Background from "../assets/Background.jpg";

const MainSection = () => {
  return (
    <Box sx={{backgroundImage: `url(${Background})`}}   display="flex" justifyContent="center" alignItems="center">
     <Stack className="background" pt="15px" textAlign="center" alignItems="center">
      <Typography variant="h4" color= "black" >Taalim School of Music <br/> by Srabani Chakraborty</Typography>
      <Box pt="15px">
      <video className="video" height="300px" width="480px"
        controls="controls"src={Video}
            type="video/mp4">
    </video>
    </Box>
    <Typography mt="6px" variant="h5">We specialize in voice training <br/> for Eastern Classical Genres. </Typography>
    <Button mt="6px" sx={{"&:hover": {
    bgcolor: "black",
    
  }, bgcolor:"#023020", mb: "16px"}} 
   variant="contained">Sign up for a free voice <br/>training workshop</Button>
     </Stack>
    </Box>
  )
}

export default MainSection;




