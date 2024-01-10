import { render} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../Redux/Store';
import GraphicExpenses from './WeeklyExpensesChart';


describe('GraphicExpenses', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component', () => {
    render(
      <Provider store={store}>
        <GraphicExpenses />
      </Provider>
    );

   
  });
});