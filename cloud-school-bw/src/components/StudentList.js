import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const StudentTable= styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    font-family: 'Lato', sans-serif;
    background: #FAFAFB;
    
    .student-list{
        display: flex;
        width: 97%;
        flex-direction: column;
        flex-wrap: wrap; 
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
        margin: .3rem;
    }

    h2{
        color: #2A7DE1;
        align-self: center;
    }
    .table{
        border-collapse: collapse;
        flex-direction: column;
        font-size: 1rem;
    }

    thead{
        justify-content: center;
    }

    tr.border-bottom td{
        border-bottom: 3px solid #F4F6F7;
        border-top: none;
    }

    tr.border-bottom th{
        border-bottom: 3px solid #F4F6F7;
    }

    @media (min-width: 768px){
        position: absolute;
        margin-top: 9.5rem;
        margin-left: 16rem; 
        width: 65%;
        max-height: 668px;
        .student-list{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }

        h2{
            width: 100%;
            text-align: center;
            font-size: 1.8rem;
        }
  }
   @media (min-width: 1024px){
        width: 72%;
        margin-top: 10.5rem;
        max-height: 800px;
        .student-list{
        width: 99%;

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
            <div class="table-responsive text-nowrap">
            <table className="table table-hover">
                <thead>
                    <tr className="border-bottom">
                        <th scope='col' className="one">Name</th>
                        <th scope='col' className="two">Email</th>
                        <th scope='col' className="three">Phone</th>
                        <th scope='col' className="four">Country</th>
                        <th scope='col' className="five"></th>
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
        </div>
    </StudentTable>
    )
}
export default StudentList
