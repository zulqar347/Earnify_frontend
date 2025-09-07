import { useState } from "react";
import "../styles/DepositPage.css";
import api from "../api";
import { Link } from "react-router-dom";


const DepositPage = () => {
 
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (formData) => {
    const tracking_id = formData.get('transactionId')
    const bank_name = formData.get('paymentMethod')
    const amount = formData.get('amount')
    const date = formData.get("date")
    api.post('deposit/', {tracking_id, bank_name, amount})
    .then(res =>{
      console.log(res.data)
      setSubmitted(true);
      })
    .catch(err=> console.error(err))
  };

  return (
    <div className="deposit-container">
      <div className="deposit-card">
        <h2 className="deposit-title">Confirm Your Deposit</h2>
        <p className="deposit-subtitle">
          Enter your payment details and transaction ID after making a deposit.
          Our team will verify and add the balance to your account.
        </p>
        <p>Make Deposit Against These Credentials</p>
        <p><strong>Account No : 0330 4177184</strong><br/><strong>Amount: 360</strong></p>

        {submitted ? (
          <div><p className="deposit-success">
            ✅ Your deposit request has been submitted successfully!
          </p>
          <Link to="/home"><button className="deposit-btn">Go TO Home</button></Link></div> 
        ) : (
          <form className="deposit-form" action={handleSubmit}>
            <label>
              Transaction / Tracking ID
              <input
                type="text"
                name="transactionId"
                required
              />
            </label>

            <label>
              Amount Deposited
              <input
                type="number"
                name="amount"
                required
                min="360"
              />
            </label>

            <label>
              Payment Method
              <select
                name="paymentMethod"
                required
              >
                <option value="">Select a method</option>
                <option value="easypaisa">Easypaisa</option>
                <option value="jazzcash">JazzCash</option>
                <option value="bank">Bank Transfer</option>
              </select>
            </label>

            <label>
              Date of Payment
              <input
                type="date"
                name="date"
                required
              />
            </label>

            <button type="submit" className="deposit-btn">
              Submit Deposit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default DepositPage;
