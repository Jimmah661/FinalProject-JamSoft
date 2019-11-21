import React from "react";
import styled from 'styled-components';
import User from './User';


const Container = styled.div`
margin: 10px;
border: 1px solid black;
width:50%;

`;
const Title = styled.h3`
padding: 3px;
`;
// const UserList = styled.div`
// padding: 3px;
// `;
// const Item = styled.div`
// border: solid 1px black;
// `;

function UserColumn(props)  {
    return (
        <Container>
            <Title>
                Available Technicians
            </Title>
            {props.users.map((user, i) => <User key={i} user={user} index={i} />)}
        </Container>
        )
}

export default UserColumn;
