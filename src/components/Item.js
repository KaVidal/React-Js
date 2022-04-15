import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Item({id, name, stock, cost, image}) {
    return(
        <Card sx={{ maxWidth: 345 }} key={id}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={image}
                alt="Imagen"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {stock} unidades
                </Typography>
                <Typography variant="body2">
                    ${cost}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                <Link to={`/item/${id}`}>Ver Más</Link>
                </Button>
            </CardActions>
        </Card>
    )
}


