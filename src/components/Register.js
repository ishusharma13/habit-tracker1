import React from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';

function Register() {
  return (
    <Paper style={{ padding: '20px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', maxWidth: '400px', margin: '20px auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Register
      </Typography>
      <form>
        <TextField label="Username" variant="outlined" fullWidth margin="normal" required />
        <TextField label="Email" variant="outlined" fullWidth margin="normal" required />
        <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" required />
        <Button variant="contained" color="primary" fullWidth type="submit" style={{ marginTop: '20px' }}>
          Register
        </Button>
      </form>
    </Paper>
  );
}

export default Register;
