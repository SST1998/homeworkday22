import {
  Container,
  Grid,
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Radio,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <Container>
      <Grid container spacing={4} sx={{ my: 4 }}>
        {/* Image */}
        <Grid item xs={12} md={6} lg={6} sx={{ display: "flex", flexDirection: "column" }} >
          <img src="/img/camera.jpeg" alt="Product Image"/>
          <Box sx={{ mt:10 }}>
            <Typography variant="body1">Stock (75/100)</Typography>
            <Box sx={{ width: "100%", bgcolor: "lightgray", borderRadius: 10 }}>
              <Box sx={{ width: "75%", bgcolor: "primary.main", borderTopLeftRadius:10, borderBottomLeftRadius:10 }}>
                <Typography sx={{ color: "white", textAlign: "center" }}>75%</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Grid container spacing={4}>
            {/* Detail */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper>
                <List sx={{ p: 1 }}>
                  <ListItem>
                    <ListItemText>
                      <Typography variant="h5">Product Name</Typography>
                      <Typography variant="body2">
                        Product description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum augue et ullamcorper aliquet.
                      </Typography>
                      <Typography variant="h6" sx={{ my:1 }}>Price: $99 </Typography>
                      <Typography variant="h6">Quantity:</Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <TextField value="1" variant="outlined" fullWidth/>
                  </ListItem>
                  <ListItem>
                    <Button variant="contained" color="primary">
                      <Link to={'/checkout'} style={{ textDecoration: 'none', color: '#fff' }}>Add to Cart</Link>
                    </Button>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            
            {/* Specification */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper>
                <List sx={{ p:0 }}>
                  <ListItem sx={{ px: 2, borderBottom: "1px solid lightgray", borderTopLeftRadius: 3, borderTopRightRadius: 3, bgcolor: "lightgray" }}>
                  Specifications
                  </ListItem>
                  <ListItem sx={{ px: 2, borderBottom: "1px solid lightgray" }}>Display: 6.1 inches</ListItem>
                  <ListItem sx={{ px: 2, borderBottom: "1px solid lightgray" }}>Resolution: 1080 x 2400 pixels</ListItem>
                  <ListItem sx={{ px: 2, borderBottom: "1px solid lightgray" }}>Processor: Snapdragon 888</ListItem>
                  <ListItem sx={{ px: 2, borderBottom: "1px solid lightgray" }}>RAM: 8GB</ListItem>
                  <ListItem sx={{ px: 2, borderBottom: "1px solid lightgray" }}>Storage: 128GB</ListItem>
                  <ListItem sx={{ px: 2, borderBottom: "1px solid lightgray" }}>Battery: 4500mAh</ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        {/* Rate */}
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Paper>
                <List sx={{ pt:0 }}>
                  <ListItem sx={{ px: 2, borderBottom: "1px solid lightgray", borderTopLeftRadius: 3, borderTopRightRadius: 3, bgcolor: "lightgray" }}>
                    Rate this Product
                  </ListItem>
                  <ListItem sx={{ py:2 }}>
                    <FormGroup row>
                      <FormControlLabel control={<Radio />} label="1" />
                      <FormControlLabel control={<Radio />} label="2" />
                      <FormControlLabel control={<Radio />} label="3" />
                      <FormControlLabel control={<Radio />} label="4" />
                      <FormControlLabel control={<Radio />} label="5" />
                    </FormGroup>
                    <Button variant="contained" color="primary">
                      Submit Rating
                    </Button>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            
            {/* Reviews */}
            <Grid item xs={12}>
              <Paper>
                <List sx={{ py:0}}>
                  <ListItem sx={{ p:2, borderTopLeftRadius: 3, borderTopRightRadius: 3, bgcolor: "lightgray" }}>
                    Reviews
                  </ListItem>
                </List>
                <List sx={{ py:0 }}>
                  <ListItem sx={{ p:2, borderBottom: "1px solid lightgray"}}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle1">John Doe</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body2">Great product! I love the design and the features. Highly recommended!</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem sx={{ p:2 }}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle1">Jane Smith</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body2">
                        Amazing value for the price. It has exceeded my expectations.
                        Will buy again!
                        </Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
