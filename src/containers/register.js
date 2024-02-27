import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Register(){

    const navigate = useNavigate();
    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword ] = React.useState("");
    const [cpf, setCpf] = React.useState("");
    const [data_nasc, setData_nasc] = React.useState("");
    const [telefone, setTelefone] = React.useState("");

    console.log(nome);
    console.log(email);

    return (
        <React.Fragment>  
            <Box sx={{ flexGrow: 1 }}>
                <Grid columns={{ xs: 4, sm: 8, md: 12 }} sx={{textAlign:"center",
                                                                backgroundColor:'#f4a71a',
                                                                position:'absolute',
                                                                left:'0',
                                                                right:'0'
                                                                }}>
                    <h1>Registrar usuário</h1>
                <Grid item md={12} sx={{ textAlign: 'center',
                                                backgroundColor: '#100f15',
                                                height:'100vh',
                                                width:'100%'
                                            }}>
                            <Typography
                                variant="h6"
                                gutterBottom sx={{ color: "#e69d22", 
                                fontsize: '32px',
                                margin: '14px'}}>
                                    Nome
                            </Typography>
                            <TextField 
                                id="outlined-basic"
                                type="nome"
                                variant="outlined"
                                value={nome}
                                sx={{ width:'326px',
                                        height:'46px',
                                        borderRadius:'12px',
                                        backgroundColor: "#f4a71a",
                                        margin:'1px'}}
                                onChange={(e) => setNome(e.target.value)}/>

                            <Typography
                                variant="h6"
                                gutterBottom sx={{ color: "#e69d22", 
                                fontsize: '32px',
                                margin: '14px'}}>
                                    E-mail
                            </Typography>
                            <TextField 
                                id="outlined-basic"
                                type="email"
                                variant="outlined"
                                value={email}
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
                                margin: '14px'}}>
                                    Senha
                            </Typography>
                            <TextField 
                                id="outlined-basic"
                                type="password"
                                variant="outlined"
                                value={password}
                                sx={{ width:'326px',
                                        height:'46px',
                                        borderRadius:'12px',
                                        backgroundColor: "#f4a71a",
                                        margin:'1px'}}
                                onChange={(e) => setPassword(e.target.value)}/>

                            <Typography
                                variant="h6"
                                gutterBottom sx={{ color: "#e69d22", 
                                fontsize: '32px',
                                margin: '14px'}}>
                                    CPF
                            </Typography>
                            <TextField 
                                id="outlined-basic"
                                type="cpf"
                                variant="outlined"
                                value={cpf}
                                sx={{ width:'326px',
                                        height:'46px',
                                        borderRadius:'12px',
                                        backgroundColor: "#f4a71a",
                                        margin:'1px'}}
                                onChange={(e) => setCpf(e.target.value)}/>

                            <Typography
                                variant="h6"
                                gutterBottom sx={{ color: "#e69d22", 
                                fontsize: '32px',
                                margin: '14px'}}>
                                    Data de nascimento
                            </Typography>
                            <TextField 
                                id="outlined-basic"
                                type="data_nasc"
                                variant="outlined"
                                value={data_nasc}
                                sx={{ width:'326px',
                                        height:'46px',
                                        borderRadius:'12px',
                                        backgroundColor: "#f4a71a",
                                        margin:'1px'}}
                                onChange={(e) => setData_nasc(e.target.value)}/>

                            <Typography
                                variant="h6"
                                gutterBottom sx={{ color: "#e69d22", 
                                fontsize: '32px',
                                margin: '14px'}}>
                                    Telefone
                            </Typography>
                            <TextField 
                                id="outlined-basic"
                                type="telefone"
                                variant="outlined"
                                value={telefone}
                                sx={{ width:'326px',
                                        height:'46px',
                                        borderRadius:'12px',
                                        backgroundColor: "#f4a71a",
                                        margin:'1px'}}
                                onChange={(e) => setTelefone(e.target.value)}/>                 
                            <Grid sx={{backgroundColor: '#100f15'}}>
                                <Button sx={{backgroundColor: '#e69d22',
                                                color: '#9d530c',
                                                margin:'24px',
                                                right:'12px',
                                                width:'125px'
                                            }}
                                onClick={() => navigate("/")}>
                                            Registrar
                                </Button>
                                <Button sx={{backgroundColor: '#e69d22',
                                                color: '#9d530c',
                                                margin:'24px',
                                                right:'12px',
                                                left:'12px',
                                                width:'125px'
                                            }}
                                onClick={() => navigate("/")}>
                                            Voltar
                                </Button>
                            </Grid>               
                        </Grid>
                    </Grid>
                </Box>
        </React.Fragment>
    );
}