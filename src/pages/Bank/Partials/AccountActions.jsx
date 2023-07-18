import { useState } from "react";
import Button from "../../../components/Button"
import Modal from "../../../components/Modal";
import FormDeposit from "./FormDeposit";
import FormWithdraw from "./FormWithdraw";

const AccountActions = ({actions, balance, loan}) => {
    const { addBalance, removeFromBalance, payLoan, requestLoan, closeAccount } = actions;
    const [modalDepositShow, setModalDepositShow] = useState(false);
    const [modalWithdrawShow, setModalWithdrawShow] = useState(false);

    const toggleModalWithdraw = () => {
        setModalWithdrawShow((modalWithdrawShow) => !modalWithdrawShow)
    }

    const toggleModalDeposit = () => {
        setModalDepositShow((modalDepositShow) => !modalDepositShow)
    }

    return (
        <>
            <div className="actions flex gap-3 items-center">
                <div className="action-deposit">
                    <Button onClick={toggleModalDeposit} className="bg-slate-100 hover:bg-slate-100 active:bg-slate-100 border-gray-200">
                        Deposit
                    </Button>
                    <Modal title="Deposit" toggleModal={toggleModalDeposit} open={modalDepositShow}>
                        <FormDeposit addBalance={addBalance} toggleModal={toggleModalDeposit} />
                    </Modal>
                </div>
                <div className="action-withdraw">
                    <Button
                        className="bg-slate-100 hover:bg-slate-100 active:bg-slate-100 rounded-lg border border-gray-200"
                        onClick={toggleModalWithdraw}
                        disabled={(balance === 0)}
                    >
                        Withdraw
                    </Button>
                    <Modal title="Withdraw" toggleModal={toggleModalWithdraw} open={modalWithdrawShow}>
                        <FormWithdraw balance={balance} withdraw={removeFromBalance} toggleModal={toggleModalWithdraw} />
                    </Modal>

                </div>
                <Button
                    className="text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 rounded-lg"
                    onClick={requestLoan}
                >
                    Request Loan
                </Button>
                <Button
                    className="text-white bg-green-500 hover:bg-green-600 disabled:pointer-events-none active:bg-green-700 rounded-lg"
                    onClick={payLoan}
                    disabled={(loan === 0)}
                >
                    Pay Loan
                </Button>
                <Button
                    className="text-white bg-red-500 hover:bg-red-600 disabled:pointer-events-none active:bg-red-700 rounded-lg"
                    onClick={closeAccount}
                    disabled={(balance > 0) || !!loan}
                >
                    Close Account
                </Button>
            </div>
        </>
    )
}

export default AccountActions