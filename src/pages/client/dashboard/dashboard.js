import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '@Common/header/header';
import Modal from '@Utils/Modal';
import transactionsJSX from '@Utils/transactions';
import { getTransactions, getAccounts } from '@Actions/accountActions';
import './dashboard.css';

const Dashboard = ({
  userDetails,
  allTransactions,
  getTransactions: getAllTransactions,
  getAccounts: getAllAccounts,
  errors,
}) => {
  const { firstName, lastName, email } = userDetails;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accountValue, setAccountValues] = useState({
    accountNumber: '',
    type: '',
    openingBalance: '',
  });

  useEffect(() => {
    const fetchAccounts = async () => {
      const accts = await getAllAccounts(email);
      setAccountValues({
        accountNumber: accts[0].accountNumber,
        type: accts[0].type,
        balance: accts[0].balance,
      });
      getAllTransactions(accts[0].accountNumber);
    };
    fetchAccounts();
  }, []);

  const setModalStatus = (value) => {
    setIsModalOpen(value);
  };
  return (
    <>
      <Header />
      <div className="body_container">
        <div className="welcome_message">
          <p>
            <b>
              Hi
              {` ${firstName} ${lastName}`}
            </b>
            , Welcome back.
          </p>
        </div>
        <div className="account_details">
          <div className="card_info">
            <p id="thick">Account</p>
            <p id="acct_num">{accountValue.accountNumber}</p>
            <p id="card_type">{accountValue.type}</p>
            <p id="fade" className="userEmail">{email}</p>
          </div>
          <div className="main_balance">
            <p id="thick">Balance</p>
            <p id="main_bal">{accountValue.balance}</p>
            <p id="fade">Previous month: ₦ 000,00.00</p>
          </div>
          <div className="accounts_info">
            <div className="accounts_balance">
              <p className="green">
                <span id="fade">
                  {'Savings: '}
                </span>
                {'00,000.00 NGN'}
              </p>
              <p className="green">
                <span id="fade">
                  {'Investment: '}
                </span>
                {'00,000.00 NGN'}
              </p>
              <p className="red">
                <span id="fade">
                  {'Credit Card: '}
                </span>
                {'00,000.00 NGN'}
              </p>
            </div>
            <div className="full_profile_btn">
              <button type="button" id="btn" value="" onClick={() => 'hi'}>full profile</button>
            </div>
          </div>
        </div>
        <div className="transaction_message">
          <p>Recent transactions by you:</p>
        </div>
        <div className="transactions">
          <div className="table_head">
            <div className="row">
              <div className="column">Date</div>
              <div className="column">Account No</div>
              <div className="column">Status</div>
              <div className="column">Amount</div>
            </div>
          </div>
          <div className="table_body">
            <div className="row">
              {allTransactions > 0 ? () => transactionsJSX(allTransactions) : 'No Transactions Yet. . .'}
            </div>
          </div>
        </div>
      </div>

      <div className="create_acct_div">
        <p>CREATE NEW ACCOUNT NOW</p>
        <input type="submit" className="ctp btn" onClick={() => setModalStatus(true)} value="CREATE ACCOUNT" />
      </div>
      {isModalOpen ? <Modal closeModal={() => setModalStatus(false)} errors={errors} /> : null}
    </>
  );
};

Dashboard.propTypes = {
  userDetails: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  getTransactions: PropTypes.func.isRequired,
  allTransactions: PropTypes.array,
  getAccounts: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
};

Dashboard.defaultProps = {
  allTransactions: [],
};

const mapStateToProps = state => ({
  userDetails: state.auth.user,
  accounts: state.accounts.accounts,
  allTransactions: state.transactions,
  errors: state.accounts.errors,
});

export default (connect(
  mapStateToProps,
  { getTransactions, getAccounts },
)(Dashboard));
