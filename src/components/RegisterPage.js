import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  TextField, 
  Button, 
  Box, 
  Typography, 
  Container,
  FormControl, 
  FormControlLabel, 
  Radio, 
  RadioGroup,
  Alert
} from '@mui/material';
import { auth } from '../api';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'motorista'
  });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    try {
      const response = await auth.register({
        email: formData.email,
        password: formData.password,
        userType: formData.userType
      });
      
      await login({ email: formData.email, password: formData.password });
      navigate('/');
    } catch (error) {
      setError('Erro ao registrar. Por favor, tente novamente.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 8,
          p: 4,
          boxShadow: '0 0 20px rgba(0,0,0,0.1)',
          borderRadius: 2,
          bgcolor: '#fff',
        }}
      >
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 700,
            mb: 4,
            textAlign: 'center'
          }}
        >
          Criar nova conta
        </Typography>
        
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <TextField
          fullWidth
          label="Email"
          type="email"
          margin="normal"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          sx={{ mb: 2 }}
        />
        
        <TextField
          fullWidth
          label="Senha"
          type="password"
          margin="normal"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Confirmar Senha"
          type="password"
          margin="normal"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          required
          sx={{ mb: 3 }}
        />

        <FormControl component="fieldset" sx={{ mb: 3, width: '100%' }}>
          <Typography variant="subtitle1" gutterBottom>
            Tipo de Conta
          </Typography>
          <RadioGroup
            row
            value={formData.userType}
            onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
          >
            <FormControlLabel 
              value="motorista" 
              control={<Radio sx={{ color: '#e53935', '&.Mui-checked': { color: '#e53935' } }} />} 
              label="Motorista" 
            />
            <FormControlLabel 
              value="empresa" 
              control={<Radio sx={{ color: '#e53935', '&.Mui-checked': { color: '#e53935' } }} />} 
              label="Empresa" 
            />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          sx={{
            mt: 2,
            mb: 3,
            bgcolor: '#e53935',
            borderRadius: '50px',
            py: 1.5,
            '&:hover': {
              bgcolor: '#c62828',
            }
          }}
        >
          Criar Conta
        </Button>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Já tem uma conta?{' '}
            <Link 
              to="/login" 
              style={{ 
                color: '#e53935', 
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                }
              }}
            >
              Fazer login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterPage; 