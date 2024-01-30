import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';

export default function Register(){

    const navigate = useNavigate();


    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item md={12} sx={{ textAlign: 'center',
                                            backgroundColor: 'black',
                                            height:'100vh',
                                            width:'100%'
                                        }}>
                        <Typography
                            variant="h6"
                            gutterBottom sx={{ color: "#C2F6F7", 
                            fontsize: '32px',
                            margin: '14px'}}>
                                Username
                        </Typography>
                        <TextField 
                            id="outlined-basic"
                            type="email"
                            variant="outlined"
                            sx={{ width:'326px',
                                    height:'46px',
                                    borderRadius:'12px',
                                    backgroundColor: "#8eabc2",
                                    margin:'1px'}}/>

                        <Typography
                            variant="h6"
                            gutterBottom sx={{ color: "#C2F6F7", 
                            fontsize: '32px',
                            margin: '14px'}}>
                                E-mail
                        </Typography>
                        <TextField 
                            id="outlined-basic"
                            type="email"
                            variant="outlined"
                            sx={{ width:'326px',
                                    height:'46px',
                                    borderRadius:'12px',
                                    backgroundColor: "#8eabc2",
                                    margin:'1px'}}/>

                        <Typography
                            variant="h6"
                            gutterBottom sx={{ color: "#C2F6F7", 
                            fontsize: '32px',
                            margin: '14px'}}>
                                Senha
                        </Typography>
                        <TextField 
                            id="outlined-basic"
                            type="email"
                            variant="outlined"
                            sx={{ width:'326px',
                                    height:'46px',
                                    borderRadius:'12px',
                                    backgroundColor: "#8eabc2",
                                    margin:'1px'}}/>

                        <Typography
                            variant="h6"
                            gutterBottom sx={{ color: "#C2F6F7", 
                            fontsize: '32px',
                            margin: '14px'}}>
                                CPF
                        </Typography>
                        <TextField 
                            id="outlined-basic"
                            type="email"
                            variant="outlined"
                            sx={{ width:'326px',
                                    height:'46px',
                                    borderRadius:'12px',
                                    backgroundColor: "#8eabc2",
                                    margin:'1px'}}/>

                        <Typography
                            variant="h6"
                            gutterBottom sx={{ color: "#C2F6F7", 
                            fontsize: '32px',
                            margin: '14px'}}>
                                Data de nascimento
                        </Typography>
                        <TextField 
                            id="outlined-basic"
                            type="email"
                            variant="outlined"
                            sx={{ width:'326px',
                                    height:'46px',
                                    borderRadius:'12px',
                                    backgroundColor: "#8eabc2",
                                    margin:'1px'}}/>

                        <Typography
                            variant="h6"
                            gutterBottom sx={{ color: "#C2F6F7", 
                            fontsize: '32px',
                            margin: '14px'}}>
                                Telefone
                        </Typography>
                        <TextField 
                            id="outlined-basic"
                            type="email"
                            variant="outlined"
                            sx={{ width:'326px',
                                    height:'46px',
                                    borderRadius:'12px',
                                    backgroundColor: "#8eabc2",
                                    margin:'1px'}}/>                                
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
}