import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import * as sw from './serviceworker';

sw.unregister();
ReactDOM.render( <App/>, document.querySelector('#root'));  