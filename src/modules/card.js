import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from "react-router-dom";



export default function AlbumCard(props) {
    const navigate = useNavigate();
    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        description
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => navigate("/albums/album")}>
                    Más información
                </Button>
                <a href={props.href} target="_blank" rel="noreferrer">
                    Ver imagen
                </a>
            </CardActions>
        </Card>
    );
}