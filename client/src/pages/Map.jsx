import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Circle, LayerGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../index.css";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useState } from "react";

const Map = () => {
  const greenOptions = { color: 'green', fillColor: 'green' }
  const yellowOptions = { color: 'yellow', fillColor: 'yellow' }
  const fillRedOptions = { fillColor: 'red' }
  const center = [21, 78]
  const [markers, setMarkers] = useState([
    {
      geocode: [21, 78],
      popUp: "India"
    }
  ]);

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [38, 38]
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    });
  };

  const LocationFinderDummy = () => {
    useMapEvents({
      click(e) {
        // console.log(e.latlng.lat);
        setMarkers(prevMarkers => [...prevMarkers, {
          geocode: [e.latlng.lat, e.latlng.lng],
          popUp: "Test"
        }])
        // alert('Coordinates are: ' + e.latlng)
      },
    });
    return null;
  };

  return (
    <MapContainer
      center={[21, 78]}
      zoom={13}
    >
      <LocationFinderDummy />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayerGroup>
        <Circle center={center} pathOptions={fillRedOptions} radius={2500} />
        <Circle
          center={center}
          pathOptions={fillRedOptions}
          radius={100}
          stroke={false}
        />
        <LayerGroup>
          <Circle
            center={[51.51, -0.08]}
            pathOptions={greenOptions}
            radius={100}
          />
        </LayerGroup>
      </LayerGroup>

      {/* map marker */}
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.geocode}
            icon={customIcon}
          >
            <Popup>
              <h2>{marker.popUp}</h2>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>

    </MapContainer>
  );
};

export default Map;