import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Greetings from './components/Greetings';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greetings />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
