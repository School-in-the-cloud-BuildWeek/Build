import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Accordion, Card } from 'react-bootstrap';

const AvailabilityCard= styled.div`
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    border: none;
    position: absolute;
    display: flex;
    margin-top: 15%;

    .card-container{
    margin-top: 2%;
    }

    .card{
    background-color: #D9EAFF;
    font-family: 'Lato', sans-serif;
    width: 100%;
    box-shadow: -.2em 0 .5em rgba(0, 0, 0, 0.2);
    border: none;
    display: flex;      
    }

    .availability{
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
    padding:4%;
    }

    .sub-title{
    font-family: 'Lato', sans-serif;
    font-size: 1.2rem;
    color: black;
    padding:4%;
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
    margin-top: 4rem;
    margin-left: .5rem; 
    width: 65%;
    max-height: 668px;
    
    .card-container{
    display: flex;
    flex-direction: row;
    }
    .card{
    width: 100%;
    margin-top: 4%;
    }
    .availability{
    font-size: 1.2rem;
    }

    .title{
    font-size: 1.5rem;
    }
}
@media (min-width: 1024px){
    margin-top: 4rem;
    margin-left: 5rem; 
    width: 72%;
    height: 80%;
    border-radius: 2px;
    justify-content: flex-start;

    .card-container{
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: flex-start;
    margin-top: 2%;
    }
    .card{
    width: 100%;
    margin-top: 4%;
    }
    .availability{
    font-size: 1.2rem;
    }

    .title{
    font-size: 2.5rem;
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

const AvailabilityData = (props) => {
    const [availability, setAvailability ]= useState();
    const [open, setOpen] = useState(false);
    useEffect(() => {
        axios
        .get('https://randomuser.me/api/?results=10') 
        .then(response => {
          console.log(response.data.results);
          setAvailability(response.data.results)
        })
        .catch(error => {
          console.error(error);
        });
    }, []);


    if (!availability) {
        return <Error className="error">Loading User information...</Error>;
      }

return (
    <AvailabilityCard>
        <div>
        <div className="card-container">
            <Accordion defaultActiveKey="0">
                <Card className= "card">
                    <Card.Title className="title">{availability.name}Ms. Jane Doe</Card.Title>
                    <Card.Subtitle className="sub-title">Math | English | Biology</Card.Subtitle>
                    <Accordion.Toggle className="availability" as={Card.Header} 
                    eventKey= "1" onClick={() => setOpen(!open)}>
                    -See Availability- {open ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey= "1">
                        <Card.Body className="cardBody" bg-transparent>
                            <p>Hours Available:{availability.location}</p>
                            <p>Monday: 9:00 a.m. - 5:00 p.m.</p>
                            <p>Tuesday: 9:00 a.m. - 5:00 p.m.</p>
                            <p>Wednesday: 9:00 a.m. - 5:00 p.m.</p>
                            <p>Thursday: 9:00 a.m. - 5:00 p.m.</p>
                            <p>Friday: unavialable</p>
                            <button>Schedule</button>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
        </div>
    </AvailabilityCard> 
)
}
export default AvailabilityData