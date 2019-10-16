import * as React from 'react';
import { render } from 'react-dom';

import Application from '@components/App';

render(<Application />, document.querySelector('#app'));

if (module.hot) {
    console.log("hot");
    module.hot.accept('./index.js', function() {
        console.log('Accepting the updated index.js module!');
    })
}