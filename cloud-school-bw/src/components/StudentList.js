import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const StudentTable= styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    font-family: 'Lato', sans-serif;
    background: #FAFAFB;
    padding-bottom: 2rem;
    
    .student-list{
        display: flex;
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap; 
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
        
    }

    h2{
        color: #2A7DE1;
        align-self: center;
    }
    table{
        border-collapse: collapse;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 95%;
        padding: .5rem;
        justify-content: space-between;
        align-self: center;
        font-size: 1.1rem;
    }

    thead{
        justify-content: center;
    }

    tr.border-bottom td{
        border-bottom: 1pt solid #F4F6F7;
        font-size: 1rem;
        padding-right: .5rem;
        align-content: space-between;
        max-height: 30px; 
        max-width: 120px !important;
    }

    tr.border-bottom th{
        border-bottom: 1pt solid #F4F6F7;
        flex-flow: nowrap;
        justify-content: space-between;
    }
    .two{
        padding-right: 1.7rem;
        padding-left: 4.5rem;
    }
    .three{
        padding-right: 3rem;
    }
    @media (min-width: 768px){
        position: absolute;
        margin-top: 12rem;
        margin-left: 16rem; 
        width: 60%;
  }
  @media (min-width: 1024px){
        width: 72%;

        table{
        width: 100%;
        font-size: 1.5rem;
        height: fit-content;
        display: flex;
    }

    tr.border-bottom td{
        font-size: 1.2rem;
        max-height: 200px; 
        max-width: 1000px !important;
        line-height: 2;
    }

    tr.border-bottom th{
        border-bottom: 1pt solid #F4F6F7;
        flex-flow: nowrap;
    }
    .two{
        padding-right: 2rem;
        padding-left: 6rem;
    }
    .three{
        padding-right: 3rem;
    }
    tbody{
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
const StudentList = (props) => { 
    const [students, setStudents] = useState();
    
    useEffect(() => {
        axios
        .get('https://randomuser.me/api/?results=10') 
        .then(response => {
          console.log(response);
          setStudents(response.data.results)
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    if (!students) {
        return <Error className="error">Loading User information...</Error>;
      }

    //   future feature for deleting, needs fix

    //   const removeData =(id) => {
    //     axios.delete(`${URL}/${id}`).then(res => {
    //         const del = volunteers.filter(volunteer => id !== volunteer.id)
    //         setVolunteers(del)
    //     })

    return (
        <StudentTable>
        <div className="student-list">
            <h2>Students</h2>
            <table>
                <thead>
                    <tr className="border-bottom">
                        <th className="one">Name</th>
                        <th className="two">Email</th>
                        <th className="three">Phone</th>
                        <th className="four">Country</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(vol => (
                        <tr className="border-bottom" key={vol.cell}>
                            <td>{vol.name.first} {vol.name.last}</td>
                            <td>
                                <button>EMail</button>
                                {/* <a className="mailto" href={`mailto:${vol.email}`}>eMail</a> */}
                            </td>
                            <td>{vol.phone}</td>
                            <td>{vol.location.country}</td>
                            <td className="delete">
                                <button>X</button>
                                {/* <button onClick={() => removeData(vol.cell)}>Delete</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </StudentTable>
    )
}
export default StudentList
