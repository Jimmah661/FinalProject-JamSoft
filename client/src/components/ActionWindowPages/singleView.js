import React, {Component} from 'react';
import API from '../../utilities/API';
import moment from 'moment';


class SingleView extends Component {
  state = {
    incident: {
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
    this.setState({
      incident: {[name]: value}
    });
  };


  render() {
    return(<div className="singleView">
      Caller: <input type="text" name="client" value={this.state.incident.client} onChange={this.handleInputChange} /><br />
      Technician: <input type="text" name="technician" value={this.state.incident.technician} onChange={this.handleInputChange} /><br />
      Technician Group: <input type="text" name="techGroup" value={this.state.incident.techGroup} onChange={this.handleInputChange} /><br />
      Short Description: <input type="text" name="shortDescription" value={this.state.incident.shortDescription} onChange={this.handleInputChange} /><br />
      Created: <input type="text" name="created" value={this.state.incident.created ? moment(new Date(this.state.incident.created)).format("DD/MM/YYYY HH:mm a") : ""} disabled /><br />
      Last Modified: <input type="text" name="updated" value={this.state.incident.updated ? moment(new Date(this.state.incident.updated)).format("DD/MM/YYYY HH:mm a") : ""} disabled /><br />
      Description: <input type="text" name="description" value={this.state.incident.description} onChange={this.handleInputChange} /><br />
      </div>)
  }

}

export default SingleView;
