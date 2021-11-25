import { Container, Box, ImageList, Typography } from '@mui/material';
import React from 'react';
import Image from '../../Assets/SchoolCampaign/Logotipo campaña materiales escolares.png';
import Image2 from '../../Assets/SchoolCampaign/Imágenes contenido opción 1.png';
import Image3 from '../../Assets/SchoolCampaign/Imágenes contenido opción 2.png';
const Content = () => {
  return (
    <Container width={false} sx={{display:'flex', alignItems:'center', flexDirection:'column', position:'relative', marginTop:'100px'}}>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems:'center', textAlign:'center', zIndex:'10'}}>
        <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, justifyContent:'center', maxWidth:{lg:'70%'}, flexWrap:'wrap', gap:'10px'}}>
          <Typography variant="h5">01-01-1900 13:15 hs </Typography>
          <Typography variant="h5">Avenida Lacarra 621, Parque avellaneda, Provincia de buenos aires</Typography>
        </Box>
        <Typography variant="h5" >TE QUEDAN: 8d 3h 23m para participar</Typography>
        <Typography paragraph sx={{maxWidth:{xs:'100%', lg:'65%'}}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam atque harum vero, in nobis
         suscipit ullam reprehenderit debitis fugiat, neque, aliquam est ipsam maiores repellendus cum voluptate at tenetur perferendis.</Typography>
        <Typography variant="h5" sx={{display: {xs:'none', sm:'block'}}}>
          Countdown
        </Typography>
      </Box>
      <Box sx={{display:{xs:'none', lg:'flex'}, minHeight:'300px', justifyContent:'space-between', position:'absolute', width:'100%', top:'50px'}}>
        <img src={Image} alt="" width="200px" style={{transform:'rotate(45deg)', height:'fit-content'}}/>
        <img src={Image2} width="200px" style={{transform:'rotate(10deg)', height:'fit-content', alignSelf:'end'}}/>
        <img src={Image3} width="200px"  style={{transform:'rotate(-10deg)', height:'fit-content', alignSelf:'end'}}/>
        <img src={Image} width="200px" style={{transform:'rotate(-45deg)', height:'fit-content'}} />
      </Box>
    </Container>
  );
}

export default Content;
