import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

import mapMarketMap from '../images/map-marker.svg';

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
      </Map>

      <Link to='' className='create-orphanage'>
        <FiPlus size={32} color='#fff' />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
