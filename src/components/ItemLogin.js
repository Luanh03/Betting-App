import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from '@mui/material/styles';

export const Item = styled(Paper)
(({ theme }) => ({backgroundColor: "#05060c",
padding: theme.spacing(2),
textAlign: 'center',
color: theme.palette.text.secondary,
width: '100%',
height: '100vh'
}));
