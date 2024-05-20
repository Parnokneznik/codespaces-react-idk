import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import CSS souboru

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    async function fetchMatches() {
      try {
        const response = await axios.get('https://api.football-data.org/v2/matches', {
          headers: {
            'X-Auth-Token': '49050740285e42ec8beccbf8335cfd53'
          }
        });
        setMatches(response.data.matches);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    }

    fetchMatches();
  }, []);

  return (
    <div className="container"> {/* Přidejte container třídu pro ohraničení obsahu */}
      <h1>Fotbalové zápasy</h1>
      <ul className="matches-list"> {/* Přidejte matches-list třídu pro seznam zápasů */}
        {matches.map(match => (
          <li key={match.id} className="match-item"> {/* Přidejte match-item třídu pro položky zápasů */}
            {match.homeTeam.name} vs. {match.awayTeam.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
