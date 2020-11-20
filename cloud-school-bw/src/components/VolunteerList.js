import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components'

const VolunteerTable= styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    font-family: 'Lato', sans-serif;
    border: none;
    
    #volunteer-list{
        display: flex;
        width: 99%;
        flex-direction: column;
        flex-wrap: wrap; 
        margin: .3rem;
        height: 100vh;
    }

    h2{
        color: #2A7DE1;
        align-self: center;
        border: none;
        margin-top: 3%;
    }
    .table{
        border-collapse: collapse;
        flex-direction: column;
        font-size: 1rem;
        border: none;
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
        border-top: none;
    }
    button{
        border: none;
        box-shadow: -.1em 0 .2em rgba(0, 0, 0, 0.2);
    }
    @media (min-width: 768px){
        position: absolute;
        margin-top: 9.5rem;
        margin-left: 16rem; 
        width: 65%;
        max-height: 668px;
        
        #volunteer-list{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height:80vh;
        }
        h2{
            width: 100%;
            text-align: center;
            font-size: 1.8rem;
        }
  }
   @media (min-width: 1024px){
        margin-top: 11rem;

        #volunteer-list{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            height:80vh;
            }
        thead{
        justify-content: flex-start;
        align-content: flex-start;
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


const VolunteerList = (props) => {
    const [volunteers, setVolunteers] = useState();
    
    useEffect(() => {
        axiosWithAuth().get('/users/volunteers') 
        .then(res => {
          console.log(res.data.data.volunteers);
          setVolunteers(res.data.data.volunteers);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    //   future feature for deleting, needs fix

    // const removeData =(id) => {
    //     axios.delete(`${URL}/${id}`).then(res => {
    //         const del = volunteers.filter(volunteer => id !== volunteer.id)
    //         setVolunteers(del)
    //     })
    // }

    if (!volunteers) {
        return <Error className="error">Loading User information...</Error>;
      }

return (
<VolunteerTable>
    <div id="volunteer-list">
        <h2>Volunteers</h2>
        <div className="table-responsive text-nowrap">
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
                    {volunteers.map(vol => (
                        <tr className="border-bottom" key={vol.id}>
                            <td>{vol.name}</td>
                            <td>
                                <button>EMail</button>
                                {/* <a className="mailto" href={`mailto:${vol.email}`}>eMail</a> */}
                            </td>
                            <td>{vol.phone}</td>
                            <td>USA</td>
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
</VolunteerTable>
    )
}

export default VolunteerList
