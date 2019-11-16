import React, {Component} from 'react';
import './CreateIncident.css';
import API from '../../utilities/API';

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
    console.log(this.state);
    API.create({
      client: this.state.client,
      technician:  this.state.technician,
      techGroup: this.state.techGroup,
      shortDescription: this.state.shortDescription,
      description:  this.state.description,
      created: new Date(),
      updated: new Date()
    });
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
          <label for="client">Caller: </label>
          <input type="text" name="client" value={this.state.client} onChange={this.handleInputChange} />
        </div>
        <div className="formField">
          <label for="techGroup">Assigned Team: </label>
          <input type="text" name="techGroup" value={this.state.techGroup} onChange={this.handleInputChange} />
        </div>
        <div className="formField">
          <label for="technician">Assigned Tech: </label>
          <input type="text" name="technician" value={this.state.technician} onChange={this.handleInputChange} />
        </div>
        <div className="formField">
          <label for="state">State: </label>
          <input type="text" name="state" value={this.state.state} onChange={this.handleInputChange} />
        </div>
        <div className="formField">
          <label for="description">Description: </label>
          <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
        </div>
        <div className="formField">
          <label for="shortDescription">Short Description</label>
          <input type="text" name="shortDescription" value={this.state.shortDescription} onChange={this.handleInputChange} />
        </div>
        {/* <label for=""></label> <input type="" name="" value={} onChange={this.handleInputChange} /><br /> */}
        <button type="submit" onClick={this.incidentSubmit}>Submit Incident</button>
      </form>
    )
  }
}

export default CreateIncident;
