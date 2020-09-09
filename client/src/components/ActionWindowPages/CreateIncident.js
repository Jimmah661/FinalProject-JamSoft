import React, {useState} from 'react';
import API from '../../utilities/API';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import './CreateIncident.css';

const FormField = ({onChange, id, disabled = false, value}) => {
  return(
    <div className='FormField'>
      <label htmlFor={id}>{id}: </label>
      <input id={id} className='FormInput' onChange={onChange} disabled={disabled} value={value}/>
    </div>
  )
};

const CreateIncident = () => {
  const [formData, setFormData] = useState({
    shortDescription: "",
    description: "",
    client: "",
    technician: "",
    techGroup: "",
    state: "",
    created: new Date(),
    updated: new Date(),
  })

  const updateForm = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value
    })
  }

  const incidentSubmit = (event) => {
    event.preventDefault();
    API.create(
      {
        client: formData.client,
        technician:  formData.technician,
        techGroup: formData.techGroup,
        state: formData.state,
        shortDescription: formData.shortDescription,
        description:  formData.description,
        created: formData.created,
        updated: formData.updated
      }
      )
      .then(id => {
        setFormData({
          ...formData,
          _id: id.data
        })
      });
  }

  if (formData._id) {
    return <Redirect to={"/incident/view?id=" + formData._id} />
  }
  return (
    <div>
        <form className='FormContainer'>
          <FormField id='client' onChange={updateForm}/>
          <FormField id='technician' onChange={updateForm} />
          <FormField id='state' onChange={updateForm} />
          <FormField id='techGroup' onChange={updateForm} />
          <FormField id='created' onChange={updateForm} disabled={true} value={moment(formData.created).format("DD/MM/YYYY hh:mm a")}/>
          <FormField id='updated' onChange={updateForm} disabled={true} value={moment(formData.updated).format("DD/MM/YYYY hh:mm a")}/>
          <div className='FormRow'>
            <div className='FormField'>
              <label htmlFor='shortDescription' className=''>Short Description: </label>
              <input id='shortDescription' className='SDInput' onChange={updateForm}/>
            </div>
          </div>
          <div className='FormRow'>
            <label htmlFor='description' className=''>Description: </label>
            <textarea id='description' className='DInput' onChange={updateForm}/>
          </div>
        </form>
        <button
          className='SubmitButton'
          type="submit"
          onClick={incidentSubmit}>
          Submit Incident
        </button>
      </div>
  )
}



export default CreateIncident;
