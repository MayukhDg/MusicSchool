import React from "react";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import TenYears from "../assets/TenYears.jpeg";
import Raushni from "../assets/Raushni.jpeg";
import Prajwal from "../assets/Prajwal.jpeg";

const MusicCard = () => {
  return (
    <Box id="testimonials" display="flex" flexWrap= "wrap" justifyContent= "center" alignItems = "center" sx={{flexDirection:{lg:"row", md:"row", sm:"column", xs:"column"}, mb:"15px"}}>
    <Card
      sx={{
        width: { lg: "300px", sm: "200px", xs: "180px" },
        mt: "20px",
        mr: "10px",
        ml:"13px",
        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }
      }}
    >
      <CardMedia
        sx={{borderRadius:"100%", width:"120px", marginLeft:"auto", marginRight:"auto", mt:"5px"}}
        component="img"
        height="140"
        image={TenYears}
        alt="green iguana"
      />
      <CardContent sx={{textAlign:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
          Suroshree Majumdar
        </Typography>
        <Typography variant="body2" color="text.secondary">
        "Talim" to me is not just the name of an institution but to me the platform of a Sadhana. I have been involved with this platform since I was 6 years old, when I started enjoying listening to music at home, I met my music teacher with the help of my parents. He took me by the hand and started giving me music lessons with great care. He carefully teaches the rhythm, rhythm, melody of the song.
        </Typography>
      </CardContent>
    </Card>
    <Card
      sx={{
        width: { lg: "300px", sm: "200px", xs: "180px" },
        mt: "20px",
        mr: "10px",
        ml:"13px",
        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }
      }}
    >
      <CardMedia
        sx={{borderRadius:"100%", width:"120px", marginLeft:"auto", marginRight:"auto", mt:"5px"}}
        component="img"
        height="140"
        image={Raushni}
        alt="green iguana"
      />
      <CardContent sx={{textAlign:"center"}}>
        <Typography gutterBottom variant="h5">
         Raushni Thakur
        </Typography>
        <Typography variant="body2" color="text.secondary">
        My name is Raushni Thakur. I am learning Vocal Music from Talim since 6yrs of my age. Sraboni Madam is my first Guru in the field of music. The method of teaching music adopted by Sraboni Madam at TALIM  makes music learning very easy. With her guidance and support, till now I have done various stage performances at our housing complex, school, Bengal Music College and Ramkrishna Mission Institute of Culture. Our best wishes for Talim.
        </Typography>
      </CardContent>
    </Card>
    <Card
      sx={{
        width: { lg: "300px", sm: "200px", xs: "180px" },
        mt: "20px",
        mr: "10px",
        ml:"13px",
        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }
      }}
    >
      <CardMedia
        sx={{borderRadius:"100%", width:"120px", marginLeft:"auto", marginRight:"auto", mt:"5px"}}
        component="img"
        height="140"
        image={Prajwal}
        alt="green iguana"
      />
      <CardContent sx={{textAlign:"center"}}>
        <Typography gutterBottom variant="h5" component="div">
        Prajwal Thakur
        </Typography>
        <Typography variant="body2" color="text.secondary">
        My name is Prajwal Thakur. I am learning Vocal Music from Talim since 5yrs of my age. Sraboni Madam is my first Guru in the field of music. I was not very keen in learning vocal music. But, the method of teaching music adopted by Sraboni Madam at TALIM  makes music learning very easy. 
With her guidance and support, I have done various stage performances at our housing complex, school, Bengal Music College.  Our best wishes for Talim.
        </Typography>
      </CardContent>
    </Card>
    </Box>
  );
};

export default MusicCard;