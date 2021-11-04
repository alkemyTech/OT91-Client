import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea  from '@material-ui/core/CardActionArea';

const Backoffice = ({ elementBackoffice}) => {
    return (
        <div>
            <h1>Bienvenid@ a Backoffice</h1>
            <p>Aqui podras administrar el sitio</p>
            <div>
                {
                   elementBackoffice &&  elementBackoffice.map(e=>(
                    <Card sx={{ maxWidth: 145 }}>
                        <CardActionArea>
                            <h3>{e.title}</h3>
                            <CardMedia>
                                <p>{e.icon}</p>
                            </CardMedia>
                            <button>ir</button>
                        </CardActionArea>
                    </Card>
                   ))
                }
            </div>

        </div>
    )
}

export default Backoffice
