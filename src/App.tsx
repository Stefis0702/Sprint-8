import './App.css'
import BalanceComponent from './Components/Balance/Balance'
import GraphComponent from './Components/Graph/WeeklyExpensesChart'

function App() {
  

  return (
    <>
      <div className="mt-10">
        <BalanceComponent />
        <GraphComponent />
      </div>
      
    </>
  )
}

export default App
