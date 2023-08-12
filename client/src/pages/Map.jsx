import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Circle, LayerGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../index.css";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useState } from "react";
import NGOModal from "../components/NGOModal";

const Map = () => {
  const [showModal, setShowModal] = useState(false);

  const greenOptions = { color: 'green', fillColor: 'green' }
  const fillRedOptions = { fillColor: 'red' }
  const fillYellowOptions = { fillColor: 'yellow' }
  const center = [21, 78]
  const [markers, setMarkers] = useState([
    {
      geocode: [21, 78],
      popUp: "India"
    }
  ]);
  const [affectedAreas, setAffectedAreas] = useState([
    {
      geocode: [21, 78],
      level: "yellow"
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
        setShowModal(true);
        // alert('Coordinates are: ' + e.latlng)
      },
    });
    return null;
  };

  return (
    showModal
      ? <NGOModal setShowModal={setShowModal} />
      : <MapContainer
        center={[28.6139, 77.2090]}
        zoom={10}
      >
        <LocationFinderDummy />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayerGroup>
          <Circle center={center} pathOptions={fillRedOptions} radius={2500} />
        </LayerGroup>
        {
          markers.map((marker, index) => (
            <LayerGroup key={index}>
              <Circle center={marker.geocode} pathOptions={fillYellowOptions} fillColor="yellow" radius={2500} />
            </LayerGroup>
          ))
        }


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