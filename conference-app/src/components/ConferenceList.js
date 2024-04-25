import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchConferences } from '../services/api';

const ConferenceList = () => {
  const [conferences, setConferences] = useState([]);

  useEffect(() => {
    const getConferences = async () => {
      try {
        const data = await fetchConferences();
        setConferences(data);
      } catch (error) {
        console.error('Error fetching conferences:', error);
      }
    };

    getConferences();
  }, []);

  return (
    <div>
      <h2>Conferences</h2>
      <ul>
        {conferences.map((conference) => (
          <li key={conference.id}>
            <Link to={`/conferences/${conference.id}`}>{conference.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConferenceList;