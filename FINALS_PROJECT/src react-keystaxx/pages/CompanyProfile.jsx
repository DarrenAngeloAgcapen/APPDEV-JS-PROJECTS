import React from 'react';
import { Link } from 'react-router-dom';
import './styles/CompanyProfile.css';

const employees = [
  { id: 1, name: 'Darren Agcapen', position: 'Lead Designer' },
  { id: 2, name: 'Akitsu Rentarou', position: 'Software Engineer' },
];

const CompanyProfile = () => {
  return (
    <div className="container">
      <h1 className='greet'>Meet Our Team</h1>
      <div className="employee-list">
        {employees.map((employee) => (
          <div key={employee.id} className="employee-card">
            <h3>{employee.name}</h3>
            <p>{employee.position}</p>
            <Link to={`/profile/${employee.id}`}>View Profile</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyProfile;
