import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in react-leaflet
// This is needed because webpack handles assets differently
const defaultIcon = L.icon({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

interface MapProps {
  position: LatLngExpression; // [latitude, longitude]
  popupText: string;
  address: string;
}

const Map: React.FC<MapProps> = ({ position, popupText, address }) => {
  // Convert position to array for Google Maps link
  const positionArray = Array.isArray(position) ? position : [position.lat, position.lng];

  // Create the icon instance after L is loaded
  const defaultIcon = L.icon({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  });
  
  return (
    <div className="map-container h-96 rounded-lg overflow-hidden shadow-md">
      <MapContainer 
        center={position}
        zoom={15} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={defaultIcon}>
          <Popup>
            <div className="text-center">
              <h3 className="font-semibold mb-1">{popupText}</h3>
              <p className="text-sm">{address}</p>
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${positionArray[0]},${positionArray[1]}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-yellow-500 hover:text-yellow-700 hover:underline mt-2 inline-block font-semibold"
              >
                Get Directions
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
