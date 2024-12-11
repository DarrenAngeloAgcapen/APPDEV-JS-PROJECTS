import React from 'react';
import { useParams } from 'react-router-dom';
import './styles/EmployeeProfile.css';

const employees = [
  { 
    id: 1, 
    name: 'Sophia Martinez', 
    position: 'E-commerce Manager', 
    bio: 'Sophia oversees the online purchasing platform, ensuring a smooth and seamless shopping experience for all customers.',
    resume: `

      Name: Sophia Martinez
      Position: E-commerce Manager
      Experience: 5+ years in online retail management
      Skills: Online platforms management, Customer Experience, Strategy Development
      Education: MBA in E-commerce, University of California
      Contact: sophia.martinez@gmail.com
    `
  },
  { 
    id: 2, 
    name: 'Liam O\'Connor', 
    position: 'Sales Coordinator', 
    bio: 'Liam coordinates sales strategies and manages the sales team to improve customer satisfaction and increase revenue.',
    resume: `

      Name: Liam O'Connor
      Position: Sales Coordinator
      Experience: 4+ years in sales team management
      Skills: Sales Management, CRM Tools, Customer Service
      Education: B.A. in Business Administration, University of Texas
      Contact: liam.oconnor@gmail.com
    `
  },
  { 
    id: 3, 
    name: 'Emily Zhao', 
    position: 'Digital Marketing Head', 
    bio: 'Emily leads the marketing team to drive traffic to the e-commerce website through innovative campaigns and SEO strategies.',
    resume: `

      Name: Emily Zhao
      Position: Digital Marketing Head
      Experience: 6+ years in digital marketing and SEO
      Skills: SEO, Content Strategy, Online Advertising, Analytics
      Education: M.S. in Digital Marketing, University of Chicago
      Contact: emily.zhao@gmail.com
    `
  },
  { 
    id: 4, 
    name: 'Carlos Ramirez', 
    position: 'Supply Chain Manager', 
    bio: 'Carlos ensures that all products are available and delivered on time, managing inventory and vendor relations effectively.',
    resume: `

      Name: Carlos Ramirez
      Position: Supply Chain Manager
      Experience: 7+ years in supply chain and logistics management
      Skills: Supply Chain Optimization, Vendor Management, Inventory Control
      Education: B.A. in Logistics, University of Miami
      Contact: carlos.ramirez@gmail.com
    `
  },
  { 
    id: 5, 
    name: 'Olivia Chen', 
    position: 'Customer Experience Director', 
    bio: 'Olivia focuses on creating and enhancing customer satisfaction through personalized online purchasing experiences.',
    resume: `

      Name: Olivia Chen
      Position: Customer Experience Director
      Experience: 8+ years in customer service and experience management
      Skills: Customer Experience, Team Leadership, Problem Solving
      Education: M.S. in Customer Experience Management, Stanford University
      Contact: olivia.chen@gmail.com
    `
  },
];

const EmployeeProfile = () => {
  const { employeeId } = useParams();
  const employee = employees.find((e) => e.id === parseInt(employeeId));

  return (
    <div className='main-container'>
    <div className="container">
      <div className="profile-card">
        <h2>{employee.name}</h2>
        <p>Position: {employee.position}</p>
        <div className="bio">
          <strong>Bio:</strong>
          <p>{employee.bio}</p>
          <h3>Resume:</h3>
          <pre>{employee.resume}</pre>
        </div>
        <div className="resume">
          
        </div>
      </div>
    </div>
      <footer>
        <hr/>
        <p>© 2024 Keyboard Haven. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default EmployeeProfile;
