import React, { Component } from 'react';
import API from "./utils/API";
import ReportDiv from './utils/reportDiv'

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
      console.log(this.state.incidents[0].shortDescription)
    })
    .catch(err => console.log(err));
  }


  render() {
    return(<div className="ReportPage">
        <button onClick={() => console.log(this.state.incidents)}>Click Me</button>
        <ul>
          {this.state.incidents.map(incident => (
            <ReportDiv key={incident._id}>
              <p>{incident.shortDescription}</p>
            </ReportDiv>
          ))}
        </ul>
      </div>)
  }
}

export default ReportPage;
