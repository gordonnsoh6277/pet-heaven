import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () =>
{

  //used to redirect user to a different page
  let navigate = useNavigate ();
  const handleViewPetsClick = () => {navigate('/Pets');};

  return (
    <div className = 'about-container'>
      <div className = 'mission-container'>
        <section className = "mission" style = {{ backgroundImage: 'url("img/mission.jpg")' }}>
          <h2>Our Mission</h2>
          <p>At Pet Heaven, our mission is to provide a safe and loving environment for abandoned cats and dogs. We are dedicated to finding forever homes for these animals and ensuring their well-being.</p>
        </section>
      </div>

      <div className = 'facilities-container'>
        <section className = "facilities" style = {{ backgroundImage: 'url("img/facility.jpg")' }}>
          <h2>Our Facilities</h2>
          <p>Our state-of-the-art facilities are designed to provide the best care for our animals. We have spacious enclosures, play areas, and a dedicated staff to ensure the comfort and happiness of our residents.</p>
        </section>
      </div>

      <section className = "team">
        <h2>Meet the Team</h2>
        <p>We have a passionate and experienced team of animal lovers who work tirelessly to ensure the welfare of our pets. Meet the dedicated individuals who make Pet Heaven possible.</p>

        <div className = "team-member">
          <img src = "img/founder.jpg" alt = "Founder" />
          <h3>Gordon Kai Jamerson</h3>
          <p>Founder & CEO</p>
          <p>Meet the visionary behind Pet Heaven, Gordon, our founder, who started this journey with a deep love for animals and a commitment to their well-being.</p>
        </div>

        <div className = "team-member">
          <img src = "img/staff1.jpg" alt = "Team Member 1" />
          <h3>Jane Doe</h3>
          <p>Animal Care Specialist</p>
          <p>With over 10 years of experience in animal care, Jane is dedicated to providing the best care for our furry residents. She has a soft spot for dogs and loves helping them find loving homes.</p>
        </div>

        <div className = "team-member">
          <img src = "img/staff2.jpg" alt = "Team Member 2" />
          <h3>John Smith</h3>
          <p>Adoption Coordinator</p>
          <p>John is the go-to person for prospective pet parents. He matches our animals with loving families, ensuring the perfect fit for both the pets and their new owners.</p>
        </div>

        <div className = "team-member">
          <img src = "img/staff3.jpg" alt = "Team Member 3" />
          <h3>Alice Johnson</h3>
          <p>Veterinary Specialist</p>
          <p>Alice ensures the health and well-being of our animals. With a background in veterinary medicine, she provides expert care and oversees medical treatments for our pets.</p>
        </div>

        <div className = "team-member">
          <img src = "img/staff4.jpg" alt = "Team Member 4" />
          <h3>Mark Davis</h3>
          <p>Training and Behavior Specialist</p>
          <p>Mark works with our animals to address behavioral issues and ensure they are well-trained, making the adoption transition smoother for both the pets and their new families.</p>
        </div>

        <div className = "team-member">
          <img src = "img/staff5.jpg" alt = "Team Member 5" />
          <h3>Emily White</h3>
          <p>Communications Manager</p>
          <p>Emily handles public relations and communications for Pet Heaven, spreading awareness about our mission and connecting with the community to promote pet adoption.</p>
        </div>

        <div className = "team-member">
          <img src = "img/staff6.jpg" alt = "Team Member 6" />
          <h3>Michael Brown</h3>
          <p>Finance and Operations Manager</p>
          <p>Michael oversees the financial aspects and day-to-day operations, ensuring that Pet Heaven runs smoothly and efficiently to support our mission.</p>
        </div>

        <div className = "team-member">
          <img src = "img/staff7.jpg" alt = "Team Member 7" />
          <h3>Sarah Miller</h3>
          <p>Event Coordinator</p>
          <p>Sarah organizes and manages events to raise funds for the welfare of our pets. Her creativity brings our community together to support our cause.</p>
        </div>

        <div className = "team-member">
          <img src = "img/staff8.jpg" alt = "Team Member 8" />
          <h3>Robert Turner</h3>
          <p>IT and Technology Specialist</p>
          <p>Robert keeps Pet Heaven technologically up-to-date, ensuring our systems support the team in providing the best care and services for our animals.</p>
        </div>

      </section>
      <div className = 'cta-container'>
        <section className = "cta" style = {{ backgroundImage: "url('img/cta.jpg')" }}>
          <h2>Ready to Adopt?</h2>
          <p>Take the first step towards welcoming a new member to your family. Click the link below to view our available pets and start the adoption process.</p>
          <button onClick = {handleViewPetsClick}>View Available Pets</button>
        </section>
      </div>

    </div>
  );
};

export default About;