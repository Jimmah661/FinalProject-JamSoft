import React from 'react';
import styled from 'styled-components';
import {Droppable} from 'react-beautiful-dnd';

const Container = styled.div`
padding: 5px;
border: solid 1px #d2d0cd;
margin: 5px;
background-color: white;
border-radius: 5px;
`;

class User extends React.Component {
    render() {
        return (
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
