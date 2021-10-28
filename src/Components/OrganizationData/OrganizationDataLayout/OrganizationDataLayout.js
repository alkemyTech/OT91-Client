import React from 'react';
import { useHistory } from 'react-router-dom';
import  { Box, Container, Button} from '@material-ui/core';

const OrganizationDataLayout = ({organizationData}) => {

    const { push } = useHistory()
    const hasData= !!organizationData
    return ( 

        <Container >
            <img alt="organizationPhoto" src={hasData ? organizationData.img :"https://via.placeholder.com/350"} />
            <div>Nombre de la Organizacion</div>
            <Box sx={{display: 'flex'}}> 
                {hasData 
                    ?organizationData.description
                    :"Cillum anim anim ea sint cillum aliquip officia et in. Proident velit ipsum exercitation aliqua est esse do sunt quis occaecat dolor non aliqua. Ullamco excepteur sint anim nisi consequat exercitation tempor ullamco velit proident exercitation deserunt. Voluptate dolore et aute consectetur esse sunt"
                }
            </Box>
            <Button variant="contained" onClick={()=>push("/backoffice/organization/edit")}>Editar</Button>
        </Container>
    );
}
 
export default OrganizationDataLayout;