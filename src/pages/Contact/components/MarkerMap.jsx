import { MapContainer, Marker, Popup, TileLayer, ScaleControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const CustomMarkerMap = () => {
  const position = [39.750868, -8.933614];
  return (
    <div>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className="map-container h-[400px] sm:w-[600px] w-full min-w-auto index-2"
      >
        <ScaleControl position="bottomright"/>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
          OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Estou aqui!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CustomMarkerMap;
