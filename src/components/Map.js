// src/components/Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box } from '@mui/material';

const Map = ({ origem, destino }) => {
  const center = [(origem.latitude + destino.latitude) / 2, (origem.longitude + destino.longitude) / 2];

  return (
    <Box sx={{ marginTop: 2, borderRadius: 2, overflow: 'hidden' }}>
      <MapContainer center={center} zoom={7} style={{ height: '300px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[origem.latitude, origem.longitude]}>
          <Popup>Origem</Popup>
        </Marker>
        <Marker position={[destino.latitude, destino.longitude]}>
          <Popup>Destino</Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default Map;
