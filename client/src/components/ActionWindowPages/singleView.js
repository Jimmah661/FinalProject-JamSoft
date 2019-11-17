import React, {Component} from 'react';
import API from '../../utilities/API';
import moment from 'moment';


class SingleView extends Component {
  state = {
    incident: {
      _id: "",
      shortDescription: "",
      description: "",
      client: "",
      technician: "",
      techGroup: "",
      state: "",
      created: "",
      updated: "",
      notes: ""
    }
  }

  componentDidMount() {
    let params = new URLSearchParams(window.location.search)
    let id = params.get('id')
    this.searchID(id)
  }

  searchID = (id) => {
    API.single(id)
      .then(res => {
        this.setState({incident: res.data})
      })
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    let { name, value } = event.target;
    let newState = this.state.incident;
    newState[name] = value;
    newState.updated = new Date(Date.now())
    this.setState({
      incident: newState
    });
  };

  saveIncident = event => {
    event.preventDefault()
    API.update(this.state.incident)
  }

  render() {
    return(
      <form id="incidentForm">
        <label className="formField">Caller: 
          <input type="text" name="client" value={this.state.incident.client} onChange={this.handleInputChange} />
        </label>
        <label className="formField">Assigned Team: 
          <input type="text" name="techGroup" value={this.state.incident.techGroup} onChange={this.handleInputChange} />
        </label>
        <label className="formField">Assigned Tech: 
          <input type="text" name="technician" value={this.state.incident.technician} onChange={this.handleInputChange} />
        </label>
        <label className="formField">State: 
          <input type="text" name="state" value={this.state.incident.state} onChange={this.handleInputChange} />
        </label>
        <label className="formField">Created:
          <input type="text" name="created" value={this.state.incident.created ? moment(new Date(this.state.incident.created)).format("DD/MM/YYYY hh:mm a") : ""} disabled />
        </label>
        <label className="formField">Updated:
          <input type="text" name="updated" value={this.state.incident.updated ? moment(new Date(this.state.incident.updated)).format("DD/MM/YYYY hh:mm a") : ""} disabled />
        </label>
        <label className="formField">Description: 
          <input type="text" name="description" value={this.state.incident.description} onChange={this.handleInputChange} />
        </label>
        <label className="formField" >Short Description   
          <input type="text" name="shortDescription" value={this.state.incident.shortDescription} onChange={this.handleInputChange} />
        </label>
        <button type="submit" onClick={this.saveIncident}>Save Incident</button>
      </form>
      )
  }

}

export default SingleView;
