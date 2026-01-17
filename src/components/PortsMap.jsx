// PortsMap.jsx - Interactive map showing Yemen ports using Leaflet

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default marker icons in React Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.webp',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.webp',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.webp',
})

// Create custom red marker icon
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.webp',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.webp',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

function PortsMap() {
  const ports = [
    {
      name: 'Saleef Port',
      position: [15.34, 42.65],
      description: 'Major port facility in western Yemen'
    },
    {
      name: 'Ras Isa Terminal',
      position: [15.08, 42.73],
      description: 'Oil terminal in the Red Sea'
    },
    {
      name: 'Hodeidah Port',
      position: [14.8, 42.95],
      description: 'Principal port on the Red Sea coast'
    },
    {
      name: 'Aden Port',
      position: [12.78, 45.03],
      description: 'Strategic port on the Gulf of Aden'
    },
  ]

  // Center the map on Yemen
  const center = [14.5, 44.0]

  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={center}
        zoom={6}
        style={{ height: '100%', width: '100%', minHeight: '400px' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.webp"
        />
        {ports.map((port) => (
          <Marker key={port.name} position={port.position} icon={redIcon}>
            <Popup>
              <div className="text-center">
                <p className="font-semibold text-slate-950">{port.name}</p>
                <p className="text-xs text-slate-600 mt-1">{port.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default PortsMap
