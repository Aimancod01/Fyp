import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Map() {
  const position = [31.5882, 74.3154];

  return (
    <div className="h-[410px] w-[600px] rounded border-4">
      <MapContainer
        className="h-full w-full"
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
