import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';

ReactDOM.render(<App />, document.querySelector('#root'))

/**
We always, in all scenarios want the container to show itself immediately.
It's only our subprojects that need to export some kind of ""Mount function" or render themselves conditionally
depending upon whether or not we are in development.

That's the big difference between the bootstrap JS file we had put together
instead of marketing and the one inside of container.
 */