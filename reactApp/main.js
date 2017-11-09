import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Something from './Something.jsx';
import Props from './Props.jsx';
import PropTypeValidation from './PropTypeValidation.jsx'

ReactDOM.render(<App/>, document.getElementById('app'));
ReactDOM.render(<Something/>, document.getElementById('something'));
ReactDOM.render(<Props headerProps="Header frop props..."
                       contentProps="Content form props..."/>, document.getElementById('showByProps'));
ReactDOM.render(<PropTypeValidation/>, document.getElementById('showPropsWithValidation'));