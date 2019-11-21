import React from 'react';
import API from '../../utilities/API'
import {DragDropContext} from 'react-beautiful-dnd';
import Column from './utils/Column';
import UserColumn from './utils/UserColumn';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
`;


class Manage extends React.Component {
    state = {
        incidents: []
    }
    componentDidMount = () => {
        API.reportAll()
        .then(res => {
          this.setState({incidents: res.data});
        })
        .catch(err => console.log(err));
        
    }    
    
    onDragEnd = result => {
        if (result.destination) {
            let updateDeets = {
                _id: result.draggableId,
                technician: result.destination.droppableId
                }
            API.update(updateDeets)
                .then(() => {
                    API.reportAll()
                        .then(res => {
                        this.setState({incidents: res.data});
                        })
                        .catch(err => console.log(err));
                })
        } 
    }
    
    render() {
        return (
            <Container>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Column tasks={this.state.incidents} />
                    <UserColumn users={['James Rudd', 'Andrew Curve', "Sophia Gaunt"]} />
                </DragDropContext>
            </Container>
        )
    }
}

export default Manage;
