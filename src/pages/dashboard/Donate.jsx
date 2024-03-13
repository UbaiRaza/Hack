import React from "react";
import "./Donate.css";
import img1 from '../../assets/img11.png'

const Donation = () => {
  return <div className="DOnate">

    <div className="donate-header">
      <h2>Make a donation to support our mission</h2>
      <p>Your contribution will help us provide free access to educational resources for underprivileged students and teachers worldwide.</p>
      <p>Your contribution will help us</p>
    </div>

    <div className="donate-content">
      <form action="/action_page.php" method="post">
        <label for="fname">Full Name:</label><br />
        <input type="text" id="fname" name="firstname" placeholder="Your Full Name.." /><br /><br />

        <label for="amount">Amount (in $):</label><br />
        <input type="number" id="amount" name="amount" min="5" max="99999" step=".01"/><br /><br />
      </form>
    </div>


  </div>;
};
export default Donation

