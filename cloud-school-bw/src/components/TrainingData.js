import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Accordion, Card } from 'react-bootstrap';

const TrainingCard= styled.div`
    position: absolute;
    text-align: center;
    /* border: red solid 1px; */
    width: 100%;
    background-color: #FAFAFB;
    height: 75%;

.card-container{
    margin:2%;
    /* border: solid red 1px; */
}
.card{
    background-color: #D9EAFF;
    font-family: 'Lato', sans-serif;
    width: 100%;
    box-shadow: -.2em 0 .5em rgba(0, 0, 0, 0.2);
}

.details{
    font-size: 1.3rem;
    color: #FAFAFB;
    font-family: 'Lato', sans-serif;
    cursor: pointer;
    background-color: #2A7DE1;
   
}
.cardBody{
    background-color: white;
    font-size: 1.4rem; 
    font-size: 1.2rem;
}

.title{
    font-family: 'Lato', sans-serif;
    font-size: 1.8rem;
    color: #2A7DE1;
    padding:2%;
}
button{
    border-color: #2A7DE1;
    color: #2A7DE1;
    background-color: #D9EAFF;
    margin-right: .5rem;
    margin-left: .5rem;
    border-radius: 5px;
    font-size: 1.1rem;
}
@media (min-width: 768px){
        position: absolute;
        margin-top: 9.5rem;
        margin-left: 15rem; 
        width: 68%;
        height: 83%;
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
    
    .card-container{
        display: flex;
        flex-direction: row;
}
    .card{
        width: 100%;
        margin-top: 4%;
}
    .details{
        font-size: 1.2rem;
    }

    .title{
        font-size: 1.5rem;
    }
}
@media (min-width: 1024px){
        margin-top: 10.6rem;
        margin-left: 16rem; 
        width: 72%;
        height: 80%;
        border-radius: 2px;
        justify-content: flex-start;

        .card-container{
        width: 40%;
        display: flex;
        align-content: center;
        justify-content: flex-start;
        margin-top: 2%;
}
        .card{
            width: 100%;
            margin-top: 4%;
    }
        .details{
            font-size: 1.2rem;
        }

        .title{
            font-size: 1.5rem;
            width: 100%;
        }
}
`
const Error= styled.div`
         @media (min-width: 768px){
        position: absolute;
        margin-top: 12rem;
        margin-left: 16rem; 
  }
`
const TrainingsTable = styled.div`
    font-family: 'Lato', sans-serif;
    background: #FAFAFB;
    margin-top: 6%;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    padding: 2%;
    h2{
        color: #2A7DE1;
        text-align: center;
        font-size: 1.5rem;
    }
    .table{
        text-align: left;
        margin-bottom: 1%;
    }
    tr.border-bottom td{
        border-bottom: 3px solid #F4F6F7;
        border-top: none;
        color: #C5C9BD;
    }
    tr.border-bottom th{
        border-bottom: 3px solid #F4F6F7;
        text-decoration: bold;
    }
    @media (min-width: 768px){
        width: 90%;
        margin-top: 4%;
        padding: 2%;
        margin-left: 2%;
        }
    @media (min-width: 1024px){
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 40%;
        
    }
`

const TrainingData = (props) => {
    const [trainings, setTrainings] = useState();
    const [open, setOpen] = useState(false);
    useEffect(() => {
        axios
        .get('https://randomuser.me/api/?results=10') 
        .then(response => {
          console.log(response.data.results);
          setTrainings(response.data.results)
        })
        .catch(error => {
          console.error(error);
        });
    }, []);


    if (!trainings) {
        return <Error className="error">Loading Training information...</Error>;
      }

return (
    <TrainingCard>
        <div className="card-container">
            <Accordion defaultActiveKey="0">
                <Card className= "card">
                    <Card.Title className="title">{trainings.name}Training Name</Card.Title>
                    <Accordion.Toggle className="details" as={Card.Header} 
                    eventKey= "1" onClick={() => setOpen(!open)}>
                    -Details- {open ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey= "1">
                        <Card.Body className="cardBody" bg-transparent>
                            <p>Training Details {trainings.location}</p>
                            <button>Mark Complete</button>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
        <TrainingsTable className="trainings-small-table">
            <div className="completed-trainings">
                <h2>Completed Trainings</h2>
                <div className="table-responsive text-nowrap">
                    <table className="table table-hover">
                        <thead>
                            <tr className="border-bottom">
                                <th scope='col' >Training Name</th>
                                <th scope='col' >Date Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-bottom">
                                <td>Canvas Training</td>
                                <td>Nov 18, 2020</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </TrainingsTable>
        <TrainingsTable className="trainings-small-table">
            <div className="completed-trainings">
                <h2>Scheduled Tutor Sessions</h2>
                <div className="table-responsive text-nowrap">
                    <table className="table table-hover">
                        <thead>
                            <tr className="border-bottom">
                                <th scope='col' >Student Name</th>
                                <th scope='col' >Date &amp; Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-bottom">
                                <td>Dave Ghrol</td>
                                <td>Nov 30, 2020 | 2:00 PM
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </TrainingsTable>
    </TrainingCard> 
)
}
export default TrainingData