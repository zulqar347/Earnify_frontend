import React, { useState } from "react";
import "../styles/WithdrawlPage.css";
import api from "../api";

const WithdrawalPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [balance, setBalance] = React.useState('')

  React.useEffect(()=>{
    api.get('users/profile/')
    .then(res => setBalance(res.data[0].balance))
    .catch(err => console.error(err))
  }, [])

  const handleSubmit = (formData) => {
    const account_name = formData.get('accountName')
    const account_no = formData.get('accountNumber')
    const method = formData.get("bankName")
    const amount = formData.get('amount')
    if (amount >= balance){
      api.post('withdraw/', {account_name, account_no, method, amount})
      .then(res => {
        console.log(res.data)
        setSubmitted(true);
      }).catch(err => console.error(err))
    }else(alert(`Error! Your Balance is ${balance}`))
  };

  return (
    <div className="withdrawal-container">
      <div className="withdrawal-card">
        <h2 className="withdrawal-title">Request Withdrawal</h2>
        <p className="withdrawal-subtitle">
          Enter your account details and the amount you wish to withdraw. Our team will process your request shortly.
        </p>

        {submitted ? (
          <p className="withdrawal-success">
            Your withdrawal request has been submitted successfully!
          </p>
        ) : (
          <form className="withdrawal-form" action={handleSubmit}>
            <label>
              Account Holder Name
              <input
                type="text"
                name="accountName"
                placeholder="e.g. Mark Rubie"
                required
              />
            </label>

            <label>
              Account Number / IBAN
              <input
                type="text"
                name="accountNumber"
                placeholder="e.g. 02135467853"
                required
              />
            </label>

            <label>
              Bank / Payment Method
              <input
                type="text"
                name="bankName"
                placeholder='e.g. Easypaisa / UBL'
                required
              />
            </label>

            <label>
              Amount to Withdraw
              <input
                type="number"
                name="amount"
                placeholder="360"
                required
                min="360"
              />
            </label>

            <button type="submit" className="withdrawal-btn">
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default WithdrawalPage;
