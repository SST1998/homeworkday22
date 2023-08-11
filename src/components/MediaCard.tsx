import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ButtonGroup, Stack } from '@mui/material';
import { styled } from '@mui/material';
import { color, sec_color } from '../pages/Home';

const BtnGroup_secondary = styled(ButtonGroup)(() => ({
  '& .MuiButton-outlined': {
    borderColor: color,
    color: color,
  },
  '& .MuiButton-outlined:hover': {
    backgroundColor: sec_color,
    borderColor: color,
    color: 'white',
  },
  '& .MuiButton-outlined:focus': {
    backgroundColor: sec_color,
    color: 'white',
  },
}));
export default function MediaCard() {
  return (
    <Stack direction={"row"} justifyContent={'center'} alignItems={'center'} spacing={2}>
      <Card sx={{ maxWidth: 400}}>
        <CardContent
          sx={{ height: 200, width: "100%", backgroundColor: color, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
           <Typography variant="h5" color='white'>
            Thumbnail
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body1">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </Typography>
        </CardContent>
        <CardActions sx={{ p: 2, display: 'flex', justifyContent: 'space-between'}}>
          <BtnGroup_secondary variant="outlined" aria-label="outlined button group" size='small'>
            <Button>View</Button>
            <Button>Edit</Button>
          </BtnGroup_secondary>
          <Typography variant="body2" color={{ color }}>
            9 mins
          </Typography>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 400}}>
        <CardContent
          sx={{ height: 200, width: "100%", backgroundColor: color, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
           <Typography variant="h5" color='white'>
            Thumbnail
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body1">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </Typography>
        </CardContent>
        <CardActions sx={{ p: 2, display: 'flex', justifyContent: 'space-between'}}>
          <BtnGroup_secondary variant="outlined" aria-label="outlined button group" size='small'>
            <Button>View</Button>
            <Button>Edit</Button>
          </BtnGroup_secondary>
          <Typography variant="body2" color={{ color }}>
            9 mins
          </Typography>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 400}}>
        <CardContent
          sx={{ height: 200, width: "100%", backgroundColor: color, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
           <Typography variant="h5" color='white'>
            Thumbnail
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body1">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </Typography>
        </CardContent>
        <CardActions sx={{ p: 2, display: 'flex', justifyContent: 'space-between'}}>
          <BtnGroup_secondary variant="outlined" aria-label="outlined button group" size='small'>
            <Button>View</Button>
            <Button>Edit</Button>
          </BtnGroup_secondary>
          <Typography variant="body2" color={{ color }}>
            9 mins
          </Typography>
        </CardActions>
      </Card>
    </Stack>
  );
}