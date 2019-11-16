import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from "./utils/API";
import ReportDiv from './utils/reportDiv';
import Moment from 'react-moment';
import './reportPage.css';

class ReportPage extends Component {
  state = {
    incidents: []
  }

  componentDidMount() {
    this.runReport()
  }

  runReport = () => {
    API.reportAll()
    .then(res => {
      this.setState({incidents: res.data});
    })
    .catch(err => console.log(err));
  }


  render() {
    return(<div className="ReportPage">
        <ul>
          {this.state.incidents.map(incident => (
            <ReportDiv key={incident._id}>
              <Link to={`/incident/view?id=${incident._id}`} >
                <p className='callerField'>Caller: {incident.client}</p>
                <p className='techField'>Assigned Tech: {incident.technician ? incident.technician : ""}</p>
                <p className='sdField'>Short Description: {incident.shortDescription}</p>
                <p className='createdField'>Created: <Moment format="DD-MM-YYYY HH:mm a">{incident.created}</Moment></p>
                <p className='groupField'>Assigned Group: {incident.techGroup}</p>
              </Link>
            </ReportDiv>
          ))}
        </ul>
      </div>)
  }
}

export default ReportPage;
