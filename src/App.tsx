import { Suspense} from 'react'
// import { useTranslation } from 'react-i18next'
import './App.css'
import BalanceComponent from './Components/Balance/Balance'
import GraphComponent from './Components/Graph/WeeklyExpensesChart'


function App() {
  
  // const { t, i18n } = useTranslation();

  

  return (
    <>
      <div className="mt-10">
        <BalanceComponent />
        <GraphComponent />
      </div>
      
    </>
  )
}

export default function WrappedApp () {
  return (
    <Suspense fallback={<div>...Cargando</div>}>
      <App />
    </Suspense>
  )
}
