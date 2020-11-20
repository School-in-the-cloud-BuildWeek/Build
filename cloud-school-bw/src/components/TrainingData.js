import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Accordion, Card } from 'react-bootstrap';

const TrainingCard= styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    font-family: 'Lato', sans-serif;
    border: none;

#training-list{
    display: flex;
    width: 99%;
    flex-direction: column;
    flex-wrap: wrap; 
    align-content: center;
    margin: .3rem;
    height: 100vh;
}
h2{
    color: #2A7DE1;
    align-self: center;
    border: none;
    margin-top: 3%;
    }

.card{
    background-color: #D9EAFF;
    font-family: 'Lato', sans-serif;
    width: 100%;
    box-shadow: -.2em 0 .5em rgba(0, 0, 0, 0.2);
    border: none;
    display: flex;      
}

.details{
    font-size: 1.3rem;
    color: #FAFAFB;
    font-family: 'Lato', sans-serif;
    cursor: pointer;
    background-color: #2A7DE1;
    text-align: center;
   
}
.cardBody{
    background-color: white;
    font-size: 1.4rem; 
    font-size: 1.2rem;
}

.title{
    font-family: 'Lato', sans-serif;
    font-size: 1.4rem;
    color: #2A7DE1;
    padding:3%;
    text-align: center;
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
    margin-left: 16rem; 
    width: 65%;
    max-height: 668px;
    
    #training-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-height: 600px;
    overflow-y: scroll;
    }
    h2{
    width: 100%;
    text-align: left;
    font-size: 1.8rem;
    margin-bottom: 2%;
    padding: 1rem;
    }
    .card-container{
        display: flex;
        width: 50%;
        margin-top: 3%;
    }
    .card{
    width: 90%;
    margin: 0 auto; 
    float: none; 
    margin-bottom: 10px;
    }
    .details{
    font-size: 1.2rem;
    }

    .title{
    font-size: 1.5rem;
    }
    }
@media (min-width: 1024px){
    margin-top: 9rem;

    #training-list{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start; 
    max-height: 670px;
    }
    h2{
    margin-bottom: 0;
    
    }
    .card{
    width: 80%;
    margin-top: .5%;
    border-radius: 10px; 
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
    margin-top: 2%;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    padding: 1%;
    h2{
        color: #2A7DE1;
        text-align: center;
        font-size: 1.5rem;
        margin: 0;
    }
    .table{
        text-align: left;
        margin-bottom: .5%;
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
        margin-top: 2%;
        padding: 1%;
        margin-left: 2%;
        }
    @media (min-width: 1024px){
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 50%;
        margin-bottom: 2%;
        justify-content: left; 
        text-align: left;   
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
        <div id="training-list">
            <h2>Trainings</h2>
            <Accordion className="card-container" defaultActiveKey="0">
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
            <TrainingsTable                 className="trainings-small-table">
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
        </div>
    </TrainingCard> 
)
}
export default TrainingData