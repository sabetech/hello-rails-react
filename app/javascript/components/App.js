import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
import store from '../Store/configStore';

const App = () => (
  <div>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Greeting />} />
        </Routes>
      </Router>
    </Provider>
  </div>
);

export default App;
