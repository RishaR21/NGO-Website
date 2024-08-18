import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>Our NGO was founded with the goal of providing support and resources to underserved communities.</p>
      <p>We focus on education, health, and economic development initiatives to create lasting change.</p>
     <img src='https://th.bing.com/th/id/OIP.Ll3PiB3VupVOKukvDXFSWAHaH2?w=152&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt=''></img>

   
      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower communities by providing resources and support to those in need. We aim to create sustainable change through education, advocacy, and direct aid.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            We envision a world where every individual has access to the resources and opportunities necessary to thrive. Our goal is to foster a more equitable and just society for all.
          </p>
        </div>
    
       
        <div className="about-section">
          <h2>Our Impact</h2>
          <p>
            Through our programs and projects, we have made a significant difference in many lives.
          </p>
        </div>
      </section>
    </div>


  );
};

export default About;
