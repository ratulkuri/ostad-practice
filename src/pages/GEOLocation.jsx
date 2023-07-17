import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import marker from '../assets/images/map-marker-icon.png';

import 'leaflet/dist/leaflet.css';

const GEOLocation = () => {

    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    // Provide the path to the marker icon explicitly
    const defaultMarker = L.icon({
        iconUrl: marker,
        iconSize: [45, 74],
        iconAnchor: [12, 74],
        popupAnchor: [11, -40],
        tooltipAnchor: [16, -28],
        shadowSize: [74, 74],
    });

    const getCurrentLocation = () => {
        if (navigator.geolocation) {

            const options = {
                enableHighAccuracy: true
            }

            // Geolocation supported
            navigator.geolocation.getCurrentPosition(
                position => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);

                    // showMap(latitude, longitude);
                },
                error => {
                    console.error(`Error occurred: ${error.message}`);
                },
                options
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }

    const reset = () => {
        setLatitude("");
        setLongitude("");
    }

    return (
        <>
            <Helmet>
                <title>GEO Location</title>
            </Helmet>
            <div className="map-wrap relative w-full bg-slate-200 z-0">
                <button onClick={getCurrentLocation} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg inline-flex items-center gap-2 text-xl sm:text-2xl bg-red-500 hover:bg-red-400 active:bg-red-600 transition-all duration-200 text-white py-3 px-4 sm:px-10"><FaMapMarkerAlt />Where am I?</button>
                {
                    !!longitude && !!latitude &&
                    <>
                         <MapContainer className="h-full absolute left-0 right-0 top-0 bottom-0" center={[latitude, longitude]} zoom={13}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
                            />
                            <Marker position={[latitude, longitude]} icon={defaultMarker}>
                                <Popup open={true}>
                                    <div className="flex flex-col">
                                        <span className="text-lg font-bold mb-2">Your coordinates are </span>
                                        <span className="text-sm">latitude: <span className="font-semibold">{latitude}</span> </span>
                                        <span className="text-sm">longitude: <span className="font-semibold">{longitude}</span> </span>
                                        <button onClick={reset} className="text-white bg-red-500 px-4 py-2 rounded-md mt-3">Reset</button>
                                    </div>
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </>
                }
            </div>
        </>
    )
}

export default GEOLocation