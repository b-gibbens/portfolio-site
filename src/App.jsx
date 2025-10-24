import './App.css'
import { Box, Button, Container, Typography } from '@mui/material'

export default function App() {
  return (
    <Container maxWidth="sm" sx={{ pt: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Hello — My Vite + MUI Site
      </Typography>

      <Typography>
        This is a starter site. Press the button to see a snackbar or add your components.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Button variant="contained">Primary action</Button>
      </Box>
    </Container>
  );
}