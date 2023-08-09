import './styles/index.css';
import './styles/App.css';
import CardList from './components/CardList';
import CounterList from './components/counter/CounterList';
import { cardsData } from './assets/db';

function App() {
  console.log('<App />');
  return (
    <div className='app'>
      <h1>Hello Vite</h1>
      {false && <CounterList />}
      {true && <CardList list={cardsData} />}
    </div>
  );
}
export default App;
