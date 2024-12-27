// src/components/FreightList.js
import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import api from '../api';
import Map from './Map';

const FreightList = () => {
  const [freights, setFreights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.fetchFreights();
        setFreights(response.data);
      } catch (error) {
        console.error("Erro ao buscar fretes:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>Lista de Fretes</Typography>
      {freights.map((freight) => (
        <Card key={freight._id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">{freight.origem.endereco} ➔ {freight.destino.endereco}</Typography>
            <Typography variant="body2">Tipo de Carga: {freight.tipoCarga}</Typography>
            <Typography variant="body2">Peso: {freight.peso} kg</Typography>
            <Typography variant="body2">Tipo de Veículo: {freight.tipoVeiculo}</Typography>
            <Typography variant="body2">Valor do Frete: R$ {freight.valorFrete}</Typography>
            <Map origem={freight.origem.coordenadas} destino={freight.destino.coordenadas} />
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default FreightList;
