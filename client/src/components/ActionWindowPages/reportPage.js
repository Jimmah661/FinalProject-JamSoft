import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from "../../utilities/API";
import ReportDiv from './utils/reportDiv';
import Moment from 'react-moment';
import './reportPage.css';

const ReportPage = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    API.reportAll()
      .then(res => {
        setIncidents(res.data)
      })
      .catch(err => console.error(err))
  }, []);

  return (
    <div className="ReportPage">
        <ul>
          {incidents.map(incident => (
            <Link to={`/incident/view?id=${incident._id}`} key={incident._id} >
              <ReportDiv>
                  <p className='callerField'>Caller: {incident.client}</p>
                  <p className='techField'>Assigned Tech: {incident.technician ? incident.technician : ""}</p>
                  <p className='sdField'>Short Description: {incident.shortDescription}</p>
                  <p className='createdField'>Created: <Moment format="DD-MM-YYYY HH:mm a">{incident.created}</Moment></p>
                  <p className='groupField'>Assigned Group: {incident.techGroup}</p>
              </ReportDiv>
            </Link>
          ))}
        </ul>
      </div>
  );
};

export default ReportPage;
