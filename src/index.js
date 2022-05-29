import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/app';
import jquery from '../node_modules/jquery/dist/jquery.min'; 
window.jQuery = jquery;

ReactDOM.render(<App />, document.getElementById('app'))