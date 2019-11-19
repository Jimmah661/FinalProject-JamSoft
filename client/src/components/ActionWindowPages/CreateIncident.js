import React, {Component} from 'react';
import API from '../../utilities/API';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';


const FormContainer = styled.form`
padding: 10px;
display: grid;
grid-template-columns: auto auto;
grid-column-gap: 15px;
grid-row-gap: 15px;
font-family: verdana;
`;

const FormField = styled.label`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: solid 1px #d2d0cd;
padding: 5px;
`;

const FormRow = styled(FormField)`
grid-column: 1 / 3; 
`;

const DRow = styled(FormRow)`
display: flex;
flex-direction: column;
align-items: flex-start;
`;

const FormLabel = styled.p``;

const FormInput = styled.input`
padding: 2px;
border: inset 1px #d2d0cd;
`;

const SDInput = styled(FormInput)`
width: 90%;
padding: 2px;
`;

const DInput = styled.textarea`
width: 100%;
height: 125px;
resize: none;
margin-top: 5px;
border: inset 1px #d2d0cd;
border-radius: 5px;
padding: 2px;
`;

const SubmitButton = styled.button`
margin-left: 15px;
border-radius: 5px;
padding: 3px;
font-family: verdana;
`;

class CreateIncident extends Component {
  state = {
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
      this.setState({_id: id.data})
    });
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    if (this.state._id) {
      return (
        <Redirect to={"/incident/view?id=" + this.state._id} />
      )
    }
    return(
      <div>
        <FormContainer>
          <FormField>
            <FormLabel>Caller:</FormLabel>
            <FormInput name="client" value={this.state.client} onChange={this.handleInputChange}  />
          </FormField>
          <FormField>
            <FormLabel>Technician: </FormLabel>
            <FormInput name="technician" value={this.state.technician} onChange={this.handleInputChange} />
          </FormField>
          <FormField>
            <FormLabel>Status: </FormLabel>
            <FormInput name="state" value={this.state.state} onChange={this.handleInputChange} />
          </FormField>
          <FormField>
            <FormLabel>Tech Group: </FormLabel>
            <FormInput name="techGroup" value={this.state.techGroup} onChange={this.handleInputChange} />
          </FormField>
          <FormField>
            <FormLabel>Created: </FormLabel>
            <FormInput value={moment(new Date()).format("DD/MM/YYYY hh:mm a")} disabled />
          </FormField>
          <FormField>
            <FormLabel>Updated: </FormLabel>
            <FormInput value={moment(new Date()).format("DD/MM/YYYY hh:mm a")} disabled />
          </FormField>
          <FormRow>
            <FormLabel>Short Description: </FormLabel>
            <SDInput name="shortDescription" value={this.state.shortDescription} onChange={this.handleInputChange} />
          </FormRow>
          <DRow>
            <FormLabel>Description: </FormLabel>
            <DInput name="description" value={this.state.description} onChange={this.handleInputChange} />
          </DRow>
        </FormContainer>
        <SubmitButton type="submit" onClick={this.incidentSubmit}>Submit Incident</SubmitButton>
      </div>
    )
  }
}

export default CreateIncident;
