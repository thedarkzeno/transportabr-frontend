// src/components/FreightForm.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import api from '../api';

const FreightForm = () => {
  const [freight, setFreight] = useState({
    origem: '',
    destino: '',
    tipoCarga: '',
    peso: '',
    dataRetirada: '',
    dataEntrega: '',
    tipoVeiculo: '',
    valorFrete: '',
    observacoes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFreight({ ...freight, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.registerFreight(freight);
      alert("Frete cadastrado com sucesso!");
      setFreight({});
    } catch (error) {
      alert("Erro ao cadastrar frete");
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 2 }}>
      <Typography variant="h4" gutterBottom>Cadastrar Frete</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Origem" name="origem" fullWidth margin="normal" onChange={handleChange} required />
        <TextField label="Destino" name="destino" fullWidth margin="normal" onChange={handleChange} required />
        <TextField label="Tipo de Carga" name="tipoCarga" fullWidth margin="normal" onChange={handleChange} required />
        <TextField label="Peso (kg)" name="peso" type="number" fullWidth margin="normal" onChange={handleChange} required />
        <TextField label="Data de Retirada" name="dataRetirada" type="date" fullWidth margin="normal" onChange={handleChange} InputLabelProps={{ shrink: true }} required />
        <TextField label="Data de Entrega" name="dataEntrega" type="date" fullWidth margin="normal" onChange={handleChange} InputLabelProps={{ shrink: true }} required />
        <TextField label="Tipo de Veículo" name="tipoVeiculo" fullWidth margin="normal" onChange={handleChange} required />
        <TextField label="Valor do Frete (R$)" name="valorFrete" type="number" fullWidth margin="normal" onChange={handleChange} required />
        <TextField label="Observações" name="observacoes" multiline rows={4} fullWidth margin="normal" onChange={handleChange} />
        <Button variant="contained" color="primary" type="submit" fullWidth sx={{ marginTop: 2 }}>Cadastrar Frete</Button>
      </form>
    </Box>
  );
};

export default FreightForm;
