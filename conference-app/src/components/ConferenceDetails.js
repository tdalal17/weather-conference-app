import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ConferenceDetails = () => {
  const { id } = useParams();
  const [conference, setConference] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchConferenceDetails();
  }, []);

  const fetchConferenceDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/conferences/${id}`);
      setConference(response.data);
    } catch (error) {
      console.error('Error fetching conference details:', error);
      setError('Failed to fetch conference details');
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!conference) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{conference.name}</h2>
      <p>Location: {conference.location}</p>
      <p>Start Date: {conference.startDate}</p>
      <p>End Date: {conference.endDate}</p>
    </div>
  );
};

export default ConferenceDetails;