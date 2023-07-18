import { useState } from "react";
import { Helmet } from "react-helmet-async"
import AccountActions from "./Partials/AccountActions";
import AccountOpenCard from "./Partials/AccountOpenCard"
import StatementTable from "./Partials/StatementTable";
import { toast } from 'react-toastify';
import moment from "moment";

const Bank = () => {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);
  const [hasAccount, setHasAccount] = useState(false);
  const [loan, setLoan] = useState(0);
  const [statement, setStatement] = useState([]);

  const addBalance = (amount, type) => {
    setBalance((prevBalance) => {
      const newBalance = prevBalance + Number(amount);
      const record = {
        date: moment().format("DD MMM, YYYY"),
        desc:  type,
        amount: Number(amount),
        balance: newBalance
      }
      addRecord(record);
      return newBalance;
    })
  }

  const removeFromBalance = (amount, type) => {
    setBalance((prevBalance) => {
      const newBalance = prevBalance - Number(amount);
      const record = {
        date: moment().format("DD MMM, YYYY"),
        desc:  type,
        amount: Number(amount),
        balance: newBalance
      }
      addRecord(record);
      return newBalance;
    })
  }

  const requestLoan = () => {
    if(!loan) {
      const grantedLoanAmount = 5000;
      setBalance((prevBalance) => {
        const newBalance = prevBalance + grantedLoanAmount;
        const record = {
          date: moment().format("DD MMM, YYYY"),
          desc:  "take loan",
          amount: Number(grantedLoanAmount),
          balance: newBalance
        }
        addRecord(record);
        setLoan(grantedLoanAmount);
        return newBalance;
      });
      toast.success(`Your Loan hasbeen granted. BDT ${grantedLoanAmount} added to your account!`);
    } else {
      toast.error("Pay your previous loan first!")
    }
  }

  const payLoan = () => {
    if (!!loan && balance === 0) {
      toast.error("You don't have enough balance to pay loan!")
    }
    if(!!loan && !!balance) {
      setBalance((prevBalance) => {
        let newBalance = prevBalance - Number(loan);
        let remainingLoan = 0;
        if (newBalance < 0) {
          remainingLoan = (newBalance * -1)
          newBalance = 0;
        }
        const record = {
          date: moment().format("DD MMM, YYYY"),
          desc:  "pay loan",
          amount: Number(loan) - remainingLoan,
          balance: newBalance
        }
        setLoan(remainingLoan);
        addRecord(record);
        if (remainingLoan) {
          toast.warning(`Your Loan has been paid partialy. BDT ${record.amount} deducted from your account!`, {toastId: "payLoan"});
        } else {
          toast.success(`Your Loan has been paid. BDT ${record.amount} deducted from your account!`, {toastId: "payLoan"});
        }
        return newBalance;
      })
    }
  }

  const addRecord = (record) => {
    setStatement([...statement, record])
  }

  const openAccount = (amount) => {
    if(!!name) {
      addBalance(amount, "opening");
      setHasAccount(true);
    } else {
      toast.error(`Write your full name!`)
    }
  }

  const closeAccount = () => {
    setHasAccount(false);
    setName("");
    setBalance(0);
    setLoan(0);
    setStatement([]);
  }

  return (
    <>
      <Helmet>
        <title>Bank</title>
      </Helmet>

      <div className="flex items-center justify-center gap-8">

        { !hasAccount && <AccountOpenCard name={name} setName={setName} openAccount={openAccount} min={1000} /> }

        {
          hasAccount &&
          <div className="w-full max-w-5xl mx-auto px-4">
            <div className="account-info flex items-center flex-wrap justify-center lg:justify-between bg-gradient-to-r from-cyan-500 to-blue-400 py-5 px-10 rounded-lg mb-10">
              <div className="acount-holder">
                <span>Account Holder</span>
                <h2 className="text-3xl font-bold">{name}</h2>
              </div>
              <div className="stats flex gap-10">
                <div className="balance text-white text-center">
                  <span className="font-medium">Balance (BDT)</span>
                  <h2 className="text-3xl font-bold">{balance}</h2>
                </div>
                <div className={`loan ${loan > 0 ? "text-red-800" : "text-white"} text-center`}>
                  <span className="font-medium">Loan (BDT)</span>
                  <h2 className="text-3xl font-bold">{loan}</h2>
                </div>
              </div>
            </div>


            <header className="flex items-center justify-between flex-wrap gap-5 py-4 border-b border-gray-100">
              <h2 className="text-lg uppercase font-semibold text-gray-800">Bank Statement</h2>
              <AccountActions balance={balance} loan={loan} actions={{ addBalance, removeFromBalance, payLoan, requestLoan, closeAccount }} />
            </header>
            <StatementTable statement={statement} />
          </div>
        }

      </div>

    </>
  )
}

export default Bank