import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import Page from './components/Page/Page';
import './App.css';

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