import React, {Component} from 'react';
import './CreateIncident.css';
import API from '../../utilities/API';
import { Redirect } from 'react-router-dom';

class CreateIncident extends Component {
  state = {
    client: "",
    technician: "",
    techGroup: "",
    state: "",
    description: "",
    shortDescription: "",
    loggedId: ""
  }

  incidentSubmit = event => {
    event.preventDefault();
    API.create({
      client: this.state.client,
      technician:  this.state.technician,
      techGroup: this.state.techGroup,
      shortDescription: this.state.shortDescription,
      description:  this.state.description,
      created: new Date(),
      updated: new Date()
    })
    .then(id => {
      this.setState({loggedId: id.data})
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    if (this.state.loggedId) {
      return (
        <Redirect to={"/incident/view?id=" + this.state.loggedId} />
      )
    }
    return(
      <form id="incidentForm">
        <div className="formField">
          <label>Caller: 
            <input type="text" name="client" value={this.state.client} onChange={this.handleInputChange} />
          </label>
        </div>
        <div className="formField">
          <label>Assigned Team: 
            <input type="text" name="techGroup" value={this.state.techGroup} onChange={this.handleInputChange} />
          </label>
        </div>
        <div className="formField">
          <label>Assigned Tech: 
            <input type="text" name="technician" value={this.state.technician} onChange={this.handleInputChange} />
          </label>
        </div>
        <div className="formField">
          <label>State: 
            <input type="text" name="state" value={this.state.state} onChange={this.handleInputChange} />
          </label>
        </div>
        <div className="formField">
          <label>Description: 
            <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
          </label>
        </div>
        <div className="formField">
          <label >Short Description   
            <input type="text" name="shortDescription" value={this.state.shortDescription} onChange={this.handleInputChange} />
          </label>
        </div>
        {/* <label for=""></label> <input type="" name="" value={} onChange={this.handleInputChange} /><br /> */}
        <button type="submit" onClick={this.incidentSubmit}>Submit Incident</button>
      </form>
    )
  }
}

export default CreateIncident;
