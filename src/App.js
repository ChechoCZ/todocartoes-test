import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Main from './pages/main';

import './styles/global.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
