
import { useHistory } from 'react-router';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea  from '@material-ui/core/CardActionArea';
const CardBackoffice = ({props}) => {
    const history = useHistory()
    const {title,icon,route}=props
    return (
        <Card sx={{ maxWidth: 145 }}>
            <CardActionArea>
                <h3>{title}</h3>
                <CardMedia>
                    <p>{icon}</p>
                </CardMedia>
                <button onClick={()=>history.push(`/${route}`)}>ir</button>
            </CardActionArea>
        </Card>
    )
}

export default CardBackoffice
