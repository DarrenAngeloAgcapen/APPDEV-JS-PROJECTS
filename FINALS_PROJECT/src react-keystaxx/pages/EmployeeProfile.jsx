import React from 'react';
import { useParams } from 'react-router-dom';
import './styles/EmployeeProfile.css';

const employees = [
  { id: 1, name: 'Darren Agcapen', position: 'Lead Designer', bio: 'Darren is at the intermediate level in UX/UI design with 2 years of learning in Web Development. He is responsible for designing the intuitive user experiences.' },
  { id: 2, name: 'Akitsu Rentarou', position: 'Software Engineer', bio: 'Akitsu has been learning software Web Development for over 3 years, specializing in React development and building scalable web applications.' },
];

const EmployeeProfile = () => {
  const { employeeId } = useParams();
  const employee = employees.find((e) => e.id === parseInt(employeeId));

  return (
    <div className="container">
      <div className="profile-card">
        <h2>{employee.name}</h2>
        <p>Position: {employee.position}</p>
        <div className="bio">
          <strong>Bio:</strong>
          <p>{employee.bio}</p>
        </div>
        <button className="vouch-btn">Vouch for {employee.name}</button>
      </div>
    </div>
  );
};

export default EmployeeProfile;
