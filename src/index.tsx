import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const app2 = (
        <BrowserRouter>
            <App />
        </BrowserRouter>
);

ReactDOM.render( app2, document.getElementById( 'root' ) );
registerServiceWorker();
