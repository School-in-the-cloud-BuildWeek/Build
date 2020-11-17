import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import styled from 'styled-components'

// const VolunteerTable

const VolunteerList = (props) => {
    const [volunteers, setVolunteers] = useState();
    
    useEffect(() => {
        axios
        .get('https://randomuser.me/api/?results=10') 
        .then(response => {
          console.log(response.data.results);
          setVolunteers(response.data.results)
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    if (!volunteers) {
        return <div className="error">Loading User information...</div>;
      }

    return (
        <div className="volunteer-list">
            <h2>Volunteer Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {volunteers.map(vol => (
                        <tr key={vol.cell}>
                            <td>{vol.name.first} {vol.name.last}</td>
                            <td>{vol.email}</td>
                            <td>{vol.phone}</td>
                            <td>{vol.location.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default VolunteerList
