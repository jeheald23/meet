// src/App.js

import { useState } from 'react'; // Import useState hook
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';

const App = () => {
  // Define state variables for alert messages
  const [infoAlert, setInfoAlert] = useState('');
  const [errorAlert, setErrorAlert] = useState('');
  const [warningAlert, setWarningAlert] = useState('');

  return (
    <div className="App">
      <CitySearch />
      {/* Pass alert functions as props to NumberOfEvents */}
      <NumberOfEvents
        setInfoAlert={setInfoAlert}
        setErrorAlert={setErrorAlert}
        setWarningAlert={setWarningAlert}
      />
      <EventList />
    </div>
  );
}

export default App;
