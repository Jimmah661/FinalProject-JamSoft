import React, {Component} from 'react';
import Moment from 'react-moment';
import './CreateIncident.css';

class CreateIncident extends Component {
  state = {
    client: "",
    technician: "",
    techGroup: "",
    state: "",
    description: "",
    shortDescription: ""
  }

  incidentSubmit = event => {
    event.preventDefault();
    console.log(this.state)
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return(
      <form id="incidentForm">
        <div className="formField">
          <span>Caller: </span>
          <input type="text" name="client" value={this.state.client} onChange={this.handleInputChange} /><br />
        </div>
        <div className="formField">
          <span>Assigned Team: </span>
          <input type="text" name="techGroup" value={this.state.techGroup} onChange={this.handleInputChange} /><br />
        </div>
        <div className="formField">
          <span>Assigned Tech: </span>
          <input type="text" name="technician" value={this.state.technician} onChange={this.handleInputChange} /><br />
        </div>
        <div className="formField">
          <span>State: </span>
          <input type="text" name="state" value={this.state.state} onChange={this.handleInputChange} /><br />
        </div>
        <div className="formField">
          <span>Description: </span>
          <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange} /><br />
        </div>
        <div className="formField">
          <span>Short Description</span>
          <input type="text" name="shortDescription" value={this.state.shortDescription} onChange={this.handleInputChange} /><br />
        </div>
        {/* <span></span> <input type="" name="" value={} onChange={this.handleInputChange} /><br /> */}
        <button type="submit" onClick={this.incidentSubmit}>Submit Incident</button>
      </form>
    )
  }
}

export default CreateIncident;
