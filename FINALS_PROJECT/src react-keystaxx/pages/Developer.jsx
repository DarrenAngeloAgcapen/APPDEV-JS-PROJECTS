import { useState } from "react";

const Developer = () => {
  const [PosFeed, setPosFeed] = useState(0);
  const [NegFeed, setNegFeed] = useState(0);
/*   const ManualResume = [{position:'Web Developer',
    Bio:'Dedicated and detail-oriented data administrator with a strong foundation in data management, web development, and IT systems. Proficient in optimizing database performance, ensuring data integrity, and implementing secure data solutions. Passionate about leveraging analytical and technical skills to support organizational goals and streamline data-driven processes. Eager to contribute to innovative IT teams in delivering efficient and scalable database systems',
    resume: `
    Name: Darren Agcapen
      Position: Web Developer
      Experience: 5+ years as a Web Developer
      Skills: Online platforms management, Customer Experience, Data Management
      Education: Bachelor of Science in Inforation Technology, University of California
      Contact: darrenagcapen@gmail.com`
}]; */

  return (
    <div className="main-container">
      <div>
        <h1>Developer Profile</h1>
        <p>Name: Agcapen, Darren Angelo</p>
        <img src="src\pages\styles\Agcapen-PRPCOM-CV.jpg" alt="Darren Agcapen's Resume" style={{ width: '100%', maxWidth: '600px' }}/>
        {/* <pre>{ManualResume.resume}</pre> */}
        <br /><br /><br />
        <h1>Are you satisfied with our Website?</h1>
        <p><button onClick={() => setPosFeed(PosFeed + 1)}>Satisfied</button> Satisfied: {PosFeed}</p>
        <p><button onClick={() => setNegFeed(NegFeed + 1)}>Dissatisfied</button> Dissatisfied: {NegFeed}</p>
      </div>
      <footer>
        <hr />
        <p>© 2024 Keyboard Haven. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Developer;
