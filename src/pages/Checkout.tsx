import {
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
  Checkbox,
  FormControl,
  Radio,
  RadioGroup,
  Button,
  Box,
  Select,
  InputLabel,
  MenuItem,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { SelectChangeEvent } from "@mui/material/Select";
import React from "react";

const StyledTextField = styled(TextField)(() => ({
  "& fieldset": {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
}));

const StyledButton = styled(Button)(() => ({
  backgroundColor: "gray",
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  "&:hover": {
    backgroundColor: "gray",
  },
}));

const Checkout = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Container>
      <Grid container sx={{ my: 5 }}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Checkout form
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ fontSize: "1.25rem", mt: 2 }}
          >
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group has a
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ fontSize: "1.25rem" }}
          >
            validation state that can be triggered by attempting to submit the
            form without completing it.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{ my: 4, flexDirection: { xs: "column-reverse", md: "row" } }}
        spacing={5}
      >
        {/* Form */}
        <Grid item xs={12} md={8} lg={8}>
          {/* Input */}
          <Typography variant="h6" sx={{ mb: 2 }}>
            Billing Address
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <TextField label="First name" size="small" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Last name" size="small" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Username"
                placeholder="Username"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AlternateEmailIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  label="Email (Optional)"
                  placeholder="you@example.com"
                  size="small"
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                placeholder="1234 Main St"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address 2 (Optional)"
                placeholder="Apartment or suite"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Country"
                  onChange={handleChange}
                >
                  <MenuItem value={0}>Chosse..</MenuItem>
                  <MenuItem value={"usa"}>United States</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="State"
                  onChange={handleChange}
                >
                  <MenuItem value={0}>Chosse..</MenuItem>
                  <MenuItem value={"usa"}>California</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <TextField label="Zip" size="small" fullWidth />
            </Grid>
          </Grid>
          <Divider sx={{ my: 4 }} />

          {/* Checkbox */}
          <Grid container>
            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Shipping address is the same as my billing addressel"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Save this information for next time"
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Divider sx={{ my: 4 }} />

          {/* Payment */}
          <Grid container spacing={5}>
            {/* Radio */}
            <Grid item xs={12}>
              <FormControl>
                <Typography variant="h6">Payment</Typography>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="credit"
                    control={<Radio />}
                    label="Credit Card"
                  />
                  <FormControlLabel
                    value="debit"
                    control={<Radio />}
                    label="Debit Card"
                  />
                  <FormControlLabel
                    value="paypal"
                    control={<Radio />}
                    label="Paypal"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            {/* Input */}
            <Grid item xs={6}>
              <TextField label="Name on card" size="small" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Credit card number" size="small" fullWidth />
            </Grid>
            <Grid item xs={3}>
              <TextField label="Expiration" size="small" fullWidth />
            </Grid>
            <Grid item xs={3}>
              <TextField label="CVV" size="small" fullWidth />
            </Grid>
          </Grid>
          <Divider sx={{ my: 4 }} />

          {/* Submit */}
          <Button variant="contained" fullWidth sx={{ p: 2 }}>
            Countinue to checkout
          </Button>
        </Grid>

        {/* Card */}
        <Grid item xs={12} md={4} lg={4}>
          {/* Title */}
          <Grid container sx={{ mb: 2 }}>
            <Grid item xs={6}>
              <Typography variant="h6">Your cart</Typography>
            </Grid>
            <Grid item container xs={6}>
              <Grid container justifyContent={"flex-end"}>
                <Box
                  sx={{
                    color: "#fff",
                    bgcolor: "grey",
                    width: 40,
                    borderRadius: 100,
                  }}
                >
                  <Typography variant="h6" align="center">
                    3
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Card 1 */}
          <Grid container sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <Paper>
                <List>
                  <ListItem secondaryAction={<ListItemText primary="$12" />}>
                    <ListItemText
                      primary="Product name"
                      secondary="Brief description"
                    />
                  </ListItem>
                  <Divider />
                  <ListItem secondaryAction={<ListItemText primary="$8" />}>
                    <ListItemText
                      primary="Second product"
                      secondary="Brief description"
                    />
                  </ListItem>
                  <Divider />
                  <ListItem secondaryAction={<ListItemText primary="$5" />}>
                    <ListItemText
                      primary="Third item"
                      secondary="Brief description"
                    />
                  </ListItem>
                  <Divider />
                  <ListItem selected secondaryAction={<ListItemText sx={{ color:'green' }} primary="-$5" />}>
                    <ListItemText
                      primary={<Typography variant="body1" sx={{ color:'green' }}>Promo code</Typography>}
                      secondary={<Typography variant="body2" sx={{ color:'green' }}>Brief description</Typography>}
                    />
                  </ListItem>
                  <Divider />
                  <ListItem
                    secondaryAction={
                      <ListItemText
                        primary={
                          <Typography variant="h6" sx={{ fontWeight: 900 }}>
                            $20
                          </Typography>
                        }
                      />
                    }
                  >
                    <ListItemText primary="Total (USD)" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>

          {/* Card 2 */}
          <Grid container sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <Paper>
                <List>
                  <ListItem>
                    <FormControl size="small" fullWidth>
                      <FormGroup row>
                        <StyledTextField variant="outlined" label="Promo code"/>
                        <StyledButton variant="contained" disableElevation>
                          Redeem
                        </StyledButton>
                      </FormGroup>
                    </FormControl>
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

export default Checkout;
