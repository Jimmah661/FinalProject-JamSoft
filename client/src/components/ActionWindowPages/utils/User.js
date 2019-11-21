import React from 'react';
import styled from 'styled-components';
import {Droppable} from 'react-beautiful-dnd';

const Container = styled.div`
padding: 5px;
border: solid 1px black;
margin-bottom: 5px;
`;

class User extends React.Component {
    render() {
        return (
            // <Draggable draggableId={this.props.user} index={this.props.index}>
            //     {(provided) => (
            //         <Container
            //             {...provided.draggableProps}
            //             {...provided.dragHandleProps}
            //             ref={provided.innerRef}
            //         >{this.props.user}</Container>
            //     )}
            // </Draggable>
        <Droppable droppableId={this.props.user}>
            {(provided) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {this.props.user}
                </Container>)}
        </Droppable>
        )
    }
}

export default User;
