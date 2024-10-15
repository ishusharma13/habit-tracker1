import React from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';

function Login() {
  return (
    <Paper style={{ padding: '20px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', maxWidth: '400px', margin: '20px auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form>
        <TextField label="Email" variant="outlined" fullWidth margin="normal" required />
        <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" required />
        <Button variant="contained" color="primary" fullWidth type="submit" style={{ marginTop: '20px' }}>
          Login
        </Button>
      </form>
    </Paper>
  );
}

export default Login;
