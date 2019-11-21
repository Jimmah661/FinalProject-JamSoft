import React from "react";
import {Droppable} from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from './Task';


const Container = styled.div`
margin: 10px;
border: 1px solid black;
width:50%;
font-family: verdana;
border: inset 1px #d2d0cd;
border-radius: 5px;
`;
const Title = styled.h3`
padding: 3px;
`;
const TaskList = styled.div`
padding: 3px;
`;
// const Item = styled.div`
// border: solid 1px black;
// `;

function Column(props)  {
    return (
        <Container>
            <Title>
                Pending Assignment
            </Title>
            <Droppable droppableId="col-1">
                {(provided) => (
                    <TaskList 
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    >
                        {props.tasks.map((task, i) => <Task key={task._id} task={task} index={i} />)}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </Container>
        )
}

export default Column;
