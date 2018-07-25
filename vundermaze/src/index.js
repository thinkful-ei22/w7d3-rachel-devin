import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import mapData from './map1.json';

ReactDOM.render(<App mapData={mapData}/>, document.getElementById('root'));
registerServiceWorker();
