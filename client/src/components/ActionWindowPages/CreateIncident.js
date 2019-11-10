import React, {Component} from 'react';
import Moment from 'react-moment';

class CreateIncident extends Component {
  incidentSubmit = event => {
    event.preventDefault();
    console.log("Submit Clicked")
  };

  render() {
    return(
      <form>
        <p>This is the create incident form</p>
        <input type="text" placeholder="Client Name"></input>
        {/* <input type="text" placeholder="Created">{Date(Date.now())}</input> */}
        <input type="text" placeholder="Assigned Tech"></input>
        <input type="text" placeholder="Assignment Group" />
        <button type="submit" onClick={this.incidentSubmit}>Submit Incident</button>
      </form>
    )
  }
}

export default CreateIncident;
