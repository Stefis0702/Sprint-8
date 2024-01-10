import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';


const TodayVariation = () => {


const balancesByWeek = useSelector((state: RootState) => state.balance.balancesByWeek);
const todayIndex = new Date().getDay();
const yesterdayIndex = todayIndex === 0 ? 6 : todayIndex - 1;
const expensesToday = balancesByWeek[0][Object.keys(balancesByWeek[0])[todayIndex]];
console.log("hoy",expensesToday);
const expensesYesterday = balancesByWeek[0][Object.keys(balancesByWeek[0])[yesterdayIndex]];
console.log("ayer",expensesYesterday);

const calculateVariation = (currentValue: number, previousValue: number) => {
  return ((currentValue - previousValue) / previousValue) * 100;
};

const variation = calculateVariation(expensesToday, expensesYesterday);





return (
    <div className='flex justify-center items-center' >
      <div>
      <h2 className="text-2xl">Gastos de hoy</h2>
      <p className="text-5xl font-bold text-black"> {expensesToday}€</p>
      </div>
      <div className="flex items-end">
      <p>{variation.toFixed(2)}%</p>
      <p>respecto a ayer</p>
      </div>
    </div>
  );

};

export default TodayVariation