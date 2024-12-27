// src/components/LandingPage.js
import React from 'react';
import { Box, Typography, Button, Container, TextField, Radio, RadioGroup, FormControlLabel, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BusinessIcon from '@mui/icons-material/Business';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

const LandingPage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box>
      {/* Hero Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', gap: 15 }}>
          {/* Left Side - Main Title and Search */}
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: '3.5rem',
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 4,
                color: '#000',
              }}
            >
              Conectando cargas e caminhoneiros em todo o Brasil
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mb: 6 }}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: '50px',
                  borderColor: '#000',
                  color: '#000',
                  px: 4,
                  '&:hover': {
                    borderColor: '#000',
                    backgroundColor: 'rgba(0,0,0,0.05)',
                  }
                }}
              >
                Ver todos os fretes
              </Button>
              <Button
                variant="contained"
                sx={{
                  borderRadius: '50px',
                  backgroundColor: '#e53935',
                  px: 4,
                  '&:hover': {
                    backgroundColor: '#c62828',
                  }
                }}
              >
                Anunciar fretes
              </Button>
            </Box>

            
          </Box>

          {/* Right Side - Registration Form */}
          <Box sx={{ 
            flex: 1, 
            maxWidth: 450,
            bgcolor: '#fff',
            p: 4,
            borderRadius: 2,
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
          }}>
            <Typography variant="subtitle1" sx={{ mb: 3, color: '#666' }}>
              PARA EMPRESAS NÃO CADASTRADAS
            </Typography>
            
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
              Cadastre-se para anunciar sua carga
            </Typography>

            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                fullWidth
                label="Email comercial"
                placeholder="Ex: contato@seuemail.com"
                variant="outlined"
              />
              
              <TextField
                fullWidth
                label="Nome"
                placeholder="Ex: João Souza"
                variant="outlined"
              />

              <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                  fullWidth
                  label="WhatsApp"
                  placeholder="(00) 0 0000-0000"
                  variant="outlined"
                />
                
                <TextField
                  fullWidth
                  label="CNPJ"
                  placeholder="00.000.000/0000-00"
                  variant="outlined"
                />
              </Box>

              <RadioGroup row>
                <FormControlLabel 
                  value="empresa" 
                  control={<Radio />} 
                  label="Sou Empresa" 
                />
                <FormControlLabel 
                  value="motorista" 
                  control={<Radio />} 
                  label="Sou Caminhoneiro" 
                />
              </RadioGroup>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  bgcolor: '#e53935',
                  '&:hover': {
                    bgcolor: '#c62828',
                  }
                }}
              >
                Cadastrar
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Section Divider */}
      <Box 
        sx={{ 
          width: '100%',
          height: '1px',
          background: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0))',
          my: 4
        }} 
      />

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Por que escolher o TransportaBR?
        </Typography>
        
        <Grid container spacing={4}>
          {[
            {
              icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
              title: '20 mil cargas por dia',
              description: 'Milhares de oportunidades de fretes em todo o Brasil',
            },
            {
              icon: <BusinessIcon sx={{ fontSize: 40 }} />,
              title: '+900 mil caminhoneiros',
              description: 'A maior rede de transportadores do Brasil',
            },
            {
              icon: <SpeedIcon sx={{ fontSize: 40 }} />,
              title: 'Rápido e Eficiente',
              description: 'Encontre fretes em minutos e nunca viaje vazio',
            },
            {
              icon: <SecurityIcon sx={{ fontSize: 40 }} />,
              title: 'Segurança Garantida',
              description: 'Transportadores e empresas verificados',
            },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: 3,
                  },
                }}
              >
                <Box sx={{ color: '#e53935', mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Download Section */}
      <Box sx={{ bgcolor: '#ffebee', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
                Baixe o App TransportaBR
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                Tenha acesso a todas as funcionalidades na palma da sua mão
              </Typography>
              {/* <Box>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Disponível no Google Play"
                  style={{ height: '60px', cursor: 'pointer' }}
                /> */}
              {/* </Box> */}
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  height: 'auto',
                  margin: '0 auto',
                  display: 'block',
                  textAlign: 'center'
                }}
              >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Disponível no Google Play" style={{ height: '60px', cursor: 'pointer' }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
