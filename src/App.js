import './App.css';
// import MultiActionAreaCard from './modules/card';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/base';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Albums from './templates/albums';
import Album from './modules/basicCard'

function App() {
  return (
    <div className="App">
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, backgroundColor: '#FFC7BB' }}>
            <Grid container>
              <Grid item>
                <FormControl component="fieldset">
                  <FormLabel component="h3">Mari Carmen Osuna</FormLabel>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>

        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={4} >
            <Grid item>
              <BrowserRouter>
                <div>
                  <Link to="/albums" className="link">
                    <Button >
                      Albums
                    </Button>
                  </Link>
                </div>
                <Routes>
                  <Route path="/albums" element={<Albums />} />
                </Routes>
                <Routes>
                  <Route path="/albums/album" element={<Album />} />
                </Routes>
              </BrowserRouter>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
