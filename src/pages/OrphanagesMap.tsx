import React from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import leaflet from 'leaflet';

import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

import mapMarketMap from '../images/map-marker.svg';

const mapIcon = leaflet.icon({
  iconUrl: mapMarketMap,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

const OrphanagesMap = () => {
  return (
    <div id='page-map'>
      <aside>
        <header>
          <img src={mapMarketMap} alt='Happy marker' />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita {':)'}</p>
        </header>

        <footer>
          <strong>Jundiaí</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-23.1893209, -47.0467892]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker position={[-23.1893209, -47.0467892]} icon={mapIcon}>
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            Lar
            <Link to="/orphanages/1">
              <FiArrowRight size={32} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/orphanages/create" className='create-orphanage'>
        <FiPlus size={32} color='#fff' />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
