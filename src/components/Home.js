import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () =>
{
  //used to redirect user to a different page
  let navigate = useNavigate ();
  const handleViewPetsClick = () => {navigate('/Pets');};

  return (
    <div className = "home-container">
      <div className = "welcome-container">
        <section className = "welcome">
          <h2>Welcome to Pet Heaven!</h2>
          <p>Find your new furry friend at Pet Heaven. We're dedicated to the welfare of abandoned cats and dogs, and we're here to help you connect with your perfect pet.</p>
        </section>
      </div>

      <div className = "description-container">
        <section className = "description">
          <h2>Discover Your Perfect Pet</h2>
          <p>Explore our lovely cats and dogs available for adoption. We have a variety of breeds and personalities, ensuring you'll find a furry friend that fits your lifestyle and preferences.</p>
        </section>
      </div>

      <div className="release-container">
        <section className="release">
          <h2>Giving Your Pet a Second Home</h2>
          <p>At Pet Heaven, we understand that life's challenges can sometimes make it difficult for pet owners to provide the care and attention their beloved animals deserve. That's why we offer a compassionate service, providing a second home for pets whose owners are unable to care for them anymore. Our dedicated team of caregivers ensures that each pet receives the love, care, and attention they need to thrive in a nurturing environment. We strive to create a seamless transition for both pets and owners, offering peace of mind and a new beginning for every furry friend entrusted to our care.</p>
        </section>
      </div>

      <div className = "benefits-container">
        <section className = "benefits">
          <h2>Benefits of Adopting from Pet Heaven</h2>
          <ul>
            <li>Give an abandoned pet a loving home.</li>
            <li>Enjoy the companionship and unconditional love of a pet.</li>
            <li>Help reduce the number of homeless animals.</li>
            <li>Choose from a diverse selection of cats and dogs.</li>
            <li>Experience the joy of pet ownership.</li>
          </ul>
        </section>
      </div>

      <div className = "testimonials-container">
        <section className = "testimonials">
          <h2>What Our Adopters Say</h2>
          <div className = "testimonial">
            <p>"I adopted a cat from Pet Heaven, and it's been a wonderful addition to our family. Thank you for making the adoption process easy and rewarding!"</p>
            <p>- Emily</p>
          </div>
          <div className = "testimonial">
            <p>"Our adopted dog brings so much joy to our lives. We're grateful to Pet Heaven for connecting us with our furry friend."</p>
            <p>- David</p>
          </div>
        </section>
      </div>

      <div className = "cta-container">
        <section className = "cta" style = {{ backgroundImage: "url('img/cta.jpg')" }}>
          <h2>Ready to Adopt?</h2>
          <p>Take the first step towards welcoming a new member to your family. Click the link below to view our available pets and start the adoption process.</p>
          <button onClick = {handleViewPetsClick}>View Available Pets</button>
        </section>
      </div>

    </div>
  );
};

export default Home;