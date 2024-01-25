import * as React from 'react';
import { Typography, experimentalStyled } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { experimentalStyled as styled } from '@mui/material/styles';
import identidade from "../images/identidade.jpg"
import { useNavigate } from 'react-router-dom';
import { RemoveScroll } from 'react-remove-scroll';
import { Item } from '../components/ItemLogin';

export default function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    console.log(email);
    console.log(password);

    return(
        <React.Fragment>
            <RemoveScroll>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container columns={{ xs: 4, sm: 8, md:12}}>
                        <Grid item md={6} sx={{
                            position:'absolute',
                            right:'0',
                            top:'0',
                            width:'100%',
                            height:'100vh'}}>
                            <Item container marginTop={27}>
                                    <img src={identidade} style={{width: '182px', 
                                    height: '183px', 
                                    WebkitMaskPositionX: '255PX', 
                                    WebKitMaskPositionY: '110px' 
                                    }}/>

                                <Typography
                                    variant="h6"
                                    gutterBottom sx={{ color: "#C2F6F7", 
                                    fontsize: '32px'}}>
                                        Username
                                </Typography>

                                <TextField 
                                    id="outlined-basic"
                                    type="email"
                                    variant="outlined"
                                    sx={{ width:'326px',
                                        height:'46px',
                                        borderRadius:'12px',
                                        backgroundColor: "#16203C"}}
                                    onChange={(e) => setEmail(e.target.value)}/>

                                <Typography
                                    variant="h6"
                                    gutterBottom sx={{ color: "#C2F6F7", 
                                    fontsize: '32px'}}>
                                        Password
                                </Typography>

                                <TextField 
                                    id="outlined-basic"
                                    type="password"
                                    variant="outlined"
                                    sx={{ width:'326px',
                                        height:'46px',
                                        borderRadius:'12px',
                                        backgroundColor: "#16203C"}}
                                    onChange={(e) => setPassword(e.target.value)}/>
                            </Item>
                        </Grid>
                        <Grid item md={6} sx={{
                            position:'absolute',
                            left:'0',
                            top:'0',
                            width:'100%',
                            height:'100vh',
                        }}>
                            <img src={identidade} style={{ width: '100%', height: '100%'}}/>
                        </Grid>
                    </Grid>
                </Box>
            </RemoveScroll>
        </React.Fragment>
    )
}