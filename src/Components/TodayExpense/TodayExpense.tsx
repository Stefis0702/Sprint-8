import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';
import { useTranslation } from 'react-i18next';


const TodayVariation = () => {
const {t} = useTranslation();

const balancesByWeek = useSelector((state: RootState) => state.balance.balancesByWeek);
let todayIndex = new Date().getDay()-1; // *** Los dias en Javascript empiezan en 0 y no en 1**
todayIndex = todayIndex === -1 ? 6 : todayIndex;
const yesterdayIndex = todayIndex === 0 ? 6 : todayIndex - 1;
const expensesToday = balancesByWeek[0][Object.keys(balancesByWeek[0])[todayIndex]];
const expensesYesterday = balancesByWeek[0][Object.keys(balancesByWeek[0])[yesterdayIndex]];


const calculateVariation = (currentValue: number, previousValue: number) => {
  return ((currentValue - previousValue) / previousValue) * 100;
};

const variation = calculateVariation(expensesToday, expensesYesterday);





return (
  <div className='flex justify-between items-center border-t-4 rounded-t border-gray-300 my-4 m-6'>
  <div>
    <h2 className="text-2xl">{t('main.Despeses avui')}</h2>
    <p className="text-5xl font-bold text-black"> {expensesToday}€</p>
  </div>
  <div className="flex flex-col items-end">
  <p className="text-2xl font-bold text-black">{variation.toFixed(2)}%</p>
  <p className="text-2xl font-bold text-black">{t('main.respecte a ahir')}</p>
</div>
</div>
  );

};

export default TodayVariation