import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

export default function Register(){

    const navigate = useNavigate();


    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container columns={{ xs: 4, sm: 8, md:12}}>
                    <Grid item md={12} sx={{
                        alignContent: 'center',
                        backgroundColor: 'blue'
                    }}>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
}