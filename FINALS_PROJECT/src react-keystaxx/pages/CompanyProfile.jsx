import React from 'react';
import { Link } from 'react-router-dom';
import './styles/CompanyProfile.css';

const employees = [
  { id: 1, name: 'Sophia Martinez', position: 'E-commerce Manager', bio: 'Sophia oversees the online purchasing platform, ensuring a smooth and seamless shopping experience for all customers.' },
  { id: 2, name: 'Liam O\'Connor', position: 'Sales Coordinator', bio: 'Liam coordinates sales strategies and manages the sales team to improve customer satisfaction and increase revenue.' },
  { id: 3, name: 'Emily Zhao', position: 'Digital Marketing Head', bio: 'Emily leads the marketing team to drive traffic to the e-commerce website through innovative campaigns and SEO strategies.' },
  { id: 4, name: 'Carlos Ramirez', position: 'Supply Chain Manager', bio: 'Carlos ensures that all products are available and delivered on time, managing inventory and vendor relations effectively.' },
  { id: 5, name: 'Olivia Chen', position: 'Customer Experience Director', bio: 'Olivia focuses on creating and enhancing customer satisfaction through personalized online purchasing experiences.' },
];


const CompanyProfile = () => {
  return (
    <div className='main-container'>
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
      <br/><br/>
      <h1 className='greet'>Our Mission & Vision</h1>
      <h2 className='mission'>Mission: To bring the art of mechanical keyboards to every enthusiast and professional.</h2>
      <h2 className='vision'>Vision: To be the global leader in Modern Keyboard Innovation.</h2>
    </div>
      <footer>
        <hr/>
        <p>© 2024 Keyboard Haven. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CompanyProfile;
