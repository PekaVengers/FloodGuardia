import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Circle, LayerGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../index.css";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useState } from "react";
import NGOModal from "../components/NGOModal";
import FloodReportModal from "../components/FloodReportModal";

const Map = () => {
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showFloodModal, setShowFloodModal] = useState(false);
  const [centreSubmitted, setCentreSubmitted] = useState(false);
  const [floodSubmitted, setFloodSubmitted] = useState(false);

  const fillRedOptions = { fillColor: 'red' }
  const fillYellowOptions = { fillColor: 'yellow' }

  const [current, setCurrent] = useState({
    val1: "",
    val2: ""
  });

  const [markers, setMarkers] = useState(JSON.parse(localStorage.getItem("markers")) || [
    {
      geocode: [21, 78],
      popUp: "India"
    }
  ]);

  const [affectedAreas, setAffectedAreas] = useState(JSON.parse(localStorage.getItem("affectedAreas")) || [
    {
      geocode: [21, 78],
      level: fillYellowOptions
    }
  ]);

  function handleChange(e) {
    setCurrent(prevCurrent => ({ ...prevCurrent, [e.target.name]: e.target.value }));
  }

  function clearCurrent() {
    setCurrent({ val1: "", val2: "" });
  }

  const center = [21, 78]

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
        if (centreSubmitted) {
          localStorage.setItem('markers', JSON.stringify([...markers, {
            geocode: [e.latlng.lat, e.latlng.lng],
            popUp: current.val2
          }]));

          setMarkers(prevMarkers => [...prevMarkers, {
            geocode: [e.latlng.lat, e.latlng.lng],
            popUp: current.val2
          }]);
          
          setCentreSubmitted(false);
          clearCurrent();
        }
        else if (floodSubmitted) {
          localStorage.setItem('affectedAreas', JSON.stringify([...affectedAreas, {
            geocode: [e.latlng.lat, e.latlng.lng],
            level: current.val2 == "High" ? fillRedOptions : fillYellowOptions
          }]));

          setAffectedAreas(prevAreas => [...prevAreas, {
            geocode: [e.latlng.lat, e.latlng.lng],
            level: current.val2 == "High" ? fillRedOptions : fillYellowOptions
          }]);
          setFloodSubmitted(false);
          clearCurrent();
        }
        clearCurrent();
        // alert('Coordinates are: ' + e.latlng)
      },
    });
    return null;
  };

  return (
    showHelpModal
      ? <NGOModal setShowModal={setShowHelpModal} setSubmitted={setCentreSubmitted} handleChange={handleChange} clear={clearCurrent} current={current} />
      : showFloodModal
        ? <FloodReportModal setShowModal={setShowFloodModal} setSubmitted={setFloodSubmitted} handleChange={handleChange} clear={clearCurrent} current={current} />
        : <>
          <div className="bg-[#00613D] pl-5 pb-5">
            <button className='text-center text-lg bg-[#00A669] p-3 font-bold mt-5 text-white rounded-lg' onClick={() => setShowHelpModal(true)}>Register Help Centre</button>
            <button className='text-center text-lg bg-[#00A669] p-3 font-bold mt-5 text-white rounded-lg ml-20' onClick={() => setShowFloodModal(true)}>Report Flood Area</button>
          </div>
          <MapContainer
            center={[28.6139, 77.2090]}
            zoom={10}
          >
            <LocationFinderDummy />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LayerGroup>
              <Circle center={center} pathOptions={fillRedOptions} radius={5500} />
            </LayerGroup>
            {
              affectedAreas.map((marker, index) => (
                <LayerGroup key={index}>
                  <Circle center={marker.geocode} pathOptions={marker.level} fill={marker.level.fillColor} radius={5500} />
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
        </>
  );
};

export default Map;