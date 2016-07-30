require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');


import './resources/scss/style.scss';

import React from "react";
import ReactDOM from "react-dom";
import EasaprApp from './easapr.js';


ReactDOM.render(
  <EasaprApp name=' easapr react app v 1.0'/>,
  document.getElementById('easapr-app')
);
