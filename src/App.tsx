import React, { useState } from "react";
import "./App.css";
import { MapContainer, Marker, Polygon, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLng } from "leaflet";
import { GenerateRandomLocations } from "./services";
import LocationMarker from "./components/LocationMarker";

const purpleOptions = { color: "purple" };
const redOptions = { color: "red" };
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
function App() {
  const [polygon, setPolygon] = useState([]);
  const [bounds, setBounds] = useState<LatLng[]>([]);
  const [countOfEdges, setCountOfEdges] = useState<number>(3);
  const getRandomLations = () => {
    GenerateRandomLocations({
      bounds: [...bounds, bounds[0]],
      countOfEdges: countOfEdges,
    }).then(({ data, status }) => {
      if (status === 200) {
        setPolygon(data.polygon);
      }
    });
  };

  return (
    <>
      <div className="form-container">
        {bounds.length > 2 ? (
          <>
            <span className="label">Number of Edge:</span>
            <input
              className="input"
              value={countOfEdges}
              onChange={(e) => setCountOfEdges(Number(e.target.value))}
            />
            <button className="button" onClick={getRandomLations}>
              get Random polygon
            </button>
          </>
        ) : (
          <h4>Select Bounds by click on map</h4>
        )}
      </div>

      <MapContainer
        center={{ lat: 0, lng: 0 }}
        zoom={5}
        scrollWheelZoom={false}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {polygon.length > 0 && (
          <Polygon pathOptions={purpleOptions} positions={polygon} />
        )}
        <Polygon pathOptions={redOptions} positions={bounds} />
        <LocationMarker setBounds={setBounds} />
        {bounds.map((b, index) => (
          <Marker key={index} position={b}></Marker>
        ))}
      </MapContainer>
    </>
  );
}

export default App;
