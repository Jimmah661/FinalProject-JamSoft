import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const Container = styled.div`
padding: 5px;
border: solid 1px black;
margin-bottom: 5px;
background-color: white;
`;

class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task._id} index={this.props.index}>
                {(provided) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >Caller: {this.props.task.client}  Tech: {this.props.task.technician}</Container>
                )}
            </Draggable>
        )
    }
}

export default Task;
