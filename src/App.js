import React, { useEffect } from 'react';
import './sharedStyle.css'
import { Provider } from 'react-redux';
import { store } from './redux/store'
import ContentContainer from './components/ContentContainer';

const App = () => {
  return (
    <Provider store={store}>
      <ContentContainer />
    </Provider>
  );
}

export default App;
