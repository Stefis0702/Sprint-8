import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";

const BalanceComponent: React.FC = () => {
 
  const balancesByWeek = useSelector((state: RootState) => state.balance.balancesByWeek);

  const firstWeekBalances = balancesByWeek[0] || {};

  
  const totalBalance = Object.values(firstWeekBalances).reduce(
    (total, balance) => total + balance,
    0
  );

  return (
    <div className="flex justify-center items-center  ">
  <div className="card w-full max-w-2xl  bg-orange-600 text-neutral-content p-3">
    <div className="card-body grid grid-cols-2">
      <div>
        <h2 className="text-2xl">Balance Total</h2>
        <p className="text-5xl font-bold">{totalBalance}€</p>
      </div>
      <div className="flex justify-end items-center space-x-2">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-7 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-7 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
  );
};

export default BalanceComponent;
