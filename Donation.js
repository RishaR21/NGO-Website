import React, { useState } from 'react';
import './Donation.css';

const Donation = () => {
  const [donationAmount, setDonationAmount] = useState('');

  const handleChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your donation of $${donationAmount}!`);
    setDonationAmount('');
  };

  return (
    <div className="donation">
        <h1>You Can Help the Needy !!</h1>
      <h2>Donate</h2>
      <p>Your support helps us continue our mission and make a difference in the world.</p>
      <img src='https://tse3.mm.bing.net/th?id=OIP.jVDW3dp-iP7XD7iDXoI9yAHaFW&pid=Api&P=0&h=180' alt=''></img>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Donation Amount ($):</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={donationAmount}
            onChange={handleChange}
            required
            min="1"
          />
        </div>
        <button type="submit">Donate</button>
      
      </form>
    </div>
  );
};

export default Donation;
