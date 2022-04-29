import {Provider} from 'react-redux';
import store from './store';
import RestaurantScreen from './components/RestaurantScreen';

function App() {
  return (
    <Provider store={store}>
      <RestaurantScreen />
    </Provider>
  );
}

export default App;
