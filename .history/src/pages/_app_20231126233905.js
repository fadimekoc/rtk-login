// src/index.js veya pages/_app.js dosyanız

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './path/to/your/redux/store'; // Redux store'ünüzün doğru yolu

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
