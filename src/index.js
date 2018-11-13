import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar  } from '@fortawesome/free-solid-svg-icons';
library.add(faStar);

ReactDOM.render(<App />, document.getElementById('root'));
