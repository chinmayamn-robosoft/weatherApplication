import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import './App.css';
import Page from './components/Page/Page';

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <Page></Page>
      </div>
    </WeatherProvider>
  );
}

export default App;