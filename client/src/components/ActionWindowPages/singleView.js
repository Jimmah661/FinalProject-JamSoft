import React, {Component} from 'react';
import API from '../../utilities/API';
import moment from 'moment';
import styled from 'styled-components';


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
height: 100px;
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

const NotesContainer = styled.div`
padding: 15px;
font-family: verdana;

`;

const NotesInput = styled.textarea`
width: 100%;
height: 125px;
resize: none;
margin-top: 5px;
border: inset 1px #d2d0cd;
border-radius: 5px;
padding: 2px;
`;

const Note = styled.div`
border: inset 1px #d2d0cd;
border-radius: 5px;
padding 5px;
margin-top: 10px;
`;

const NoteText = styled.p`
padding: 3px;
`;

const NoteDate = styled.p`
font-size: 60%;
`;

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
      notes: []
    },
    newNote: {
      note: "",
      date: ""
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


// This needs to be finished
  handleNoteChange = event => {
    // let { name, value } = event.target;
    // console.log(name, value)
    // if (!this.state.newNote.date) {

    // }
  }

  saveIncident = event => {
    event.preventDefault()
    API.update(this.state.incident)
  }

  render() {
    return(
      <div>
      <FormContainer>
        <FormField>
          <FormLabel>Caller:</FormLabel>
          <FormInput name="client" value={this.state.incident.client} onChange={this.handleInputChange}  />
        </FormField>
        <FormField>
          <FormLabel>Technician: </FormLabel>
          <FormInput name="technician" value={this.state.incident.technician} onChange={this.handleInputChange} />
        </FormField>
        <FormField>
          <FormLabel>Status: </FormLabel>
          <FormInput name="state" value={this.state.incident.state} onChange={this.handleInputChange} />
        </FormField>
        <FormField>
          <FormLabel>Tech Group: </FormLabel>
          <FormInput name="techGroup" value={this.state.incident.techGroup} onChange={this.handleInputChange} />
        </FormField>
        <FormField>
          <FormLabel>Created: </FormLabel>
          <FormInput value={this.state.incident.created ? moment(new Date(this.state.incident.created)).format("DD/MM/YYYY hh:mm a") : ""} disabled />
        </FormField>
        <FormField>
          <FormLabel>Updated: </FormLabel>
          <FormInput value={this.state.incident.updated ? moment(new Date(this.state.incident.updated)).format("DD/MM/YYYY hh:mm a") : ""} disabled />
        </FormField>
        <FormRow>
          <FormLabel>Short Description: </FormLabel>
          <SDInput name="shortDescription" value={this.state.incident.shortDescription} onChange={this.handleInputChange} />
        </FormRow>
        <DRow>
          <FormLabel>Description: </FormLabel>
          <DInput name="description" value={this.state.incident.description} onChange={this.handleInputChange} />
        </DRow>
      </FormContainer>
      <SubmitButton type="submit" onClick={this.saveIncident}>Update Incident</SubmitButton>
      <NotesContainer>
        <p>Notes:</p>
        <NotesInput name="Notes" onChange={this.handleNoteChange} />
        {this.state.incident.notes.map(x => {
          return <Note>
              <NoteDate>{moment(x.date).format("DD/MM/YYYY hh:mm a")}</NoteDate>
              <NoteText>{x.note}</NoteText>
            </Note>
          })}
      </NotesContainer>
    </div>
      )
  }

}

export default SingleView;
