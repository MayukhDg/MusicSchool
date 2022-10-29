import React from 'react';
import { Grid, Typography, Box, IconButton } from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SpatialAudioIcon from '@mui/icons-material/SpatialAudio';


const Services = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      bgcolor="#023020"
      id="services"
      pt="10px"
      pb="10px"
      color="white"
    >
      <Grid item lg={6} md={6} sm={6}>
        <Box textTransform="uppercase" ml="auto" textAlign="center">
          <Typography pt="3px" variant="h3" gutterBottom>Vocal Training: <SpatialAudioIcon sx={{fontSize:"60px", pt:"0", mt:"0"}}/></Typography>
          <Typography fontWeight={400} gutterBottom variant="body1">Pure Hindustani Classical Vocal classes </Typography>
          <Typography gutterBottom variant="body1">Rabindra Sangeet Classes</Typography>
          <Typography gutterBottom variant="body1">Nazrul Geeti Classes</Typography>
          <Typography gutterBottom variant="body1">Folk Classes</Typography>
          <Typography gutterBottom variant="body1">Puratani Classes</Typography>
          <Typography gutterBottom variant="body1">Kheyal (Drut and Bilambit), Dhrupad, Dhamar</Typography>
          <Typography gutterBottom variant="body1">Puratani Classes</Typography>
        </Box>
        </Grid>
      
      <Grid sx={{mt:"4px"}}  item lg={6} md={6} sm={6}>
        <Box textTransform="uppercase" sx={{mt:{sm:"18px", xs:"18px"}}} mr="auto" textAlign="center">
          <Typography pt="4px" gutterBottom ml="10px" variant="h3">Instrument Classes:<IconButton size="large"><MusicNoteIcon sx={{fontSize:"60px"}}/></IconButton></Typography>
          <Typography gutterBottom variant="body1"> We have a passionate visiting faculty for instrument learning.</Typography>
          <Typography gutterBottom variant="body1">Keyboard</Typography>
          <Typography gutterBottom variant="body1">Spanish Guitar</Typography>
          <Typography gutterBottom variant="body1">Sitar </Typography>
          <Typography gutterBottom variant="body1">Violin </Typography>
          <Typography gutterBottom variant="body1">Tabla </Typography>
          <Typography gutterBottom variant="body1">Flute</Typography>
          <Typography gutterBottom variant="body1">Sarod</Typography>
          
        </Box>
      </Grid>
    </Grid>
  )
}

export default Services;