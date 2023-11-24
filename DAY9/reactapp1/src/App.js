import './App.css';
import Store from './components/Store';
import { Provider } from 'react-redux';
import { Counter } from './components/Counter';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Counter/>
      </Provider>
    </div>
  );
}

export default App;