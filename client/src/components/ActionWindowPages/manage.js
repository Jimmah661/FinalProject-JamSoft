import React, { useState, useEffect } from 'react';
import API from '../../utilities/API'
import {DragDropContext} from 'react-beautiful-dnd';
import Column from './utils/Column';
import UserColumn from './utils/UserColumn';

// class Manage extends React.Component {
//     state = {
//         incidents: []
//     }
//     componentDidMount = () => {
//         API.reportAll()
//         .then(res => {
//           this.setState({incidents: res.data});
//         })
//         .catch(err => console.log(err));
        
//     }    
    
//     onDragEnd = result => {
//         if (result.destination) {
//             let updateDeets = {
//                 _id: result.draggableId,
//                 technician: result.destination.droppableId
//                 }
//             API.update(updateDeets)
//                 .then(() => {
//                     API.reportAll()
//                         .then(res => {
//                         this.setState({incidents: res.data});
//                         })
//                         .catch(err => console.log(err));
//                 })
//         } 
//     }
    
//     render() {
//         return (
//             <div style={{display: 'flex'}}>
//                 <DragDropContext onDragEnd={this.onDragEnd}>
//                     <Column tasks={this.state.incidents} />
//                     <UserColumn users={['James Rudd', 'Andrew Curve', "Sophia Gaunt"]} />
//                 </DragDropContext>
//             </div>
//         )
//     }
// }

const Manage = () => {
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        API.reportAll()
            .then(res => {
                setIncidents(res.data);
            })
            .catch(err => console.error(err))
    }, []) 

    const onDragEnd = result => {
        if (result.destination) {
            let updateDeets = {
                _id: result.draggableId,
                technician: result.destination.droppableId
                }
            API.update(updateDeets)
                .then(() => {
                    API.reportAll()
                        .then(res => {
                            setIncidents(res.data);
                        })
                        .catch(err => console.log(err));
                })
        } 
    }

    return(
        <div style={{display: 'flex'}}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Column tasks={incidents} />
                <UserColumn users={['James Rudd', 'Andrew Curve', "Sophia Gaunt"]} />
            </DragDropContext>
        </div>
    )
}

export default Manage;
