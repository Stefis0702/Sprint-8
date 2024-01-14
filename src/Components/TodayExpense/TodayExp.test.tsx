import { render} from '@testing-library/react';
import { Provider } from 'react-redux';  
import store from '../../Redux/Store';  
import TodayVariation from './TodayExpense';



test('renders TodayVariation component', () => {
  render(
    <Provider store={store}>
      <TodayVariation />
    </Provider>
  );

})
