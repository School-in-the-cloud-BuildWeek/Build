import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        return <div className="error">Loading User information...</div>;
      }

    return (
        <div className="student-list">
            <h2>Student Users</h2>
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
                    {students.map(vol => (
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
export default StudentList
