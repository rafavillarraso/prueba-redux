import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index'

function App() {

  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);


  return (
    <div className="App">
      <div className="account"><h2>{account}</h2></div>
      <button 
        onClick={() => depositMoney(1000)}
        type="button" 
        class="btn btn-primary"> 
          Deposit 
      </button>
      <button 
        onClick={() => withdrawMoney(1000)}
        type="button"
        class="btn btn-dark">
          Withdrow 
        </button>
    </div>
  );
}

export default App;
