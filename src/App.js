import React, { useEffect, useState } from 'react';
import './App.css';
import LineChartComponent from './components/LineChartComponent';
import PieChartComponent from './components/PieChartComponent';
import BarChartComponent from './components/BarChartComponent';
import SeverityBarChart from './components/SeverityBarChart';
import EventsAreaChart from './components/EventsAreaChart';
import ProtocolPieChart from './components/ProtocolPieChart';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/eve.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data); // Log the fetched data
        setData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Dashboard</h1>
      <div className="chart-container">
        {data.length > 0 ? (
          <>
            <LineChartComponent data={data} />
            <PieChartComponent data={data} />
            <BarChartComponent data={data} />
            <SeverityBarChart data={data} />
            {/* <EventsAreaChart data={data} /> */}
            <ProtocolPieChart data={data} />
          </>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
}

export default App;
