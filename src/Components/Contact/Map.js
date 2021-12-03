import { marker } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Logo from '../../Assets/Logo/Logo.png';

const Map = ({position}) => {
    return (
    <MapContainer center={position} zoom={16} scrollWheelZoom={true} style={{width:'100%', minHeight:'500px'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
            <img src={Logo} alt="Logo" height="80px"/>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map;
