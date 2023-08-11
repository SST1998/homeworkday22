import { Box, Container, Typography } from "@mui/material"

const Notfound = () => {
  return (
    <Container>
      <Box sx={{ pt:40 }}>
        <Typography variant="h1" sx={{ color: 'gray' }}>404 Not Found...</Typography>
      </Box>
    </Container>
  )
}

export default Notfound