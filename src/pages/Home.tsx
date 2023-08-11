import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';
import MediaCard from '../components/MediaCard';

export const color = "#6c757d"
export const sec_color = "#5c636a"
const Btn_secondary = styled(Button)(() => ({
  backgroundColor: color,
  color: 'white',
  '&:hover': {
    backgroundColor: sec_color,
  },
  '&:focus': {
    backgroundColor: sec_color,
  }
}));

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ p:10}}>
        <Box sx={{ 
          width: '100%',
          textAlign: 'center'
        }}>
          <Typography variant='h2'>Album example</Typography>
          <Typography variant='h5' color={color}>
            Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.
          </Typography>
          <Stack spacing={2} 
          direction="row" 
          justifyContent='center'
          alignItems='center'
          sx={{ m:4 }}>
            <Button variant="contained">Main call to action</Button>
            <Btn_secondary variant="contained">Secondary action</Btn_secondary>
          </Stack>
        </Box>
      </Container>
      <Box 
        sx={{ 
          width: '100%',
          p:7,
          bgcolor: '#f8f9fa',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Stack direction='column' spacing={3}>
          <MediaCard />
          <MediaCard />
        </Stack>
      </Box>
    </>
  );
}

export default Home