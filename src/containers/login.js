import * as React from 'react';
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import macaco from "../images/macaco.jpg"
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
                            right:'0',
                            top:'0',
                            width:'100%',
                            height:'100vh'}}>
                            <Item>
                                    <img src={macaco} style={{width: '182px', 
                                    height: '183px', 
                                    WebkitMaskPositionX: '255PX', 
                                    WebKitMaskPositionY: '110px',
                                    marginTop: '137px' 
                                    }}/>

                                <Typography
                                    variant="h6"
                                    gutterBottom sx={{ color: "#e69d22", 
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
                                        backgroundColor: "#f4a71a",
                                        margin:'1px'}}
                                    onChange={(e) => setEmail(e.target.value)}/>

                                <Typography
                                    variant="h6"
                                    gutterBottom sx={{ color: "#e69d22", 
                                    fontsize: '32px',
                                    margin:'14px'}}>
                                        Password
                                </Typography>

                                <TextField 
                                    id="outlined-basic"
                                    type="password"
                                    variant="outlined"
                                    sx={{ width:'326px',
                                        height:'46px',
                                        borderRadius:'12px',
                                        backgroundColor: "#f4a71a",
                                        margin:'1px'}}
                                    onChange={(e) => setPassword(e.target.value)} />

                                <Grid>
                                    <Button sx={{backgroundColor: '#e69d22',
                                                color: '#9d530c',
                                                margin:'24px',
                                                right:'12px',
                                                width:'125px'
                                    }}
                                    onClick={() => navigate("/Home")}>
                                        Entrar
                                    </Button>

                                    <Button sx={{backgroundColor: '#e69d22',
                                                color: '#9d530c',
                                                margin:'24px',
                                                left:'12px',
                                                width:'125px'
                                    }}
                                    onClick={() => navigate("/Register")}>
                                        Registrar
                                    </Button>
                                </Grid>
                            </Item>
                        </Grid>
                        <Grid item md={6} sx={{
                            left:'0',
                            top:'0',
                            width:'100%',
                            
                        }}>
                            <img src={macaco} style={{ width: '100%', height: '100vh'}}/>
                        </Grid>
                    </Grid>
                </Box>
            </RemoveScroll>
        </React.Fragment>
    )
}