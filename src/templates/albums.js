// import './App.css';
import AlbumCard from '../modules/card';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import axios from "axios";
const { useState, useEffect } = require("react")
const baseURL = 'https://jsonplaceholder.typicode.com/albums/1/photos';

function Albums() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(baseURL)
            .then(res => {
                setData(res.data)

            })
    }, [])
    console.log(data)
    return (
        <div className="App">
            <Grid direction="row" container spacing={2}>
                {
                    data.map(album => (
                        <Grid item key={album.id}>
                            <AlbumCard title={album.title} href={album.thumbnailUrl} />
                        </Grid>
                    ))
                }

            </Grid>

        </div>
    );
}

export default Albums;
