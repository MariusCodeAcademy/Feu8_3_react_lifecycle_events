import './styles/index.css';
import './styles/App.css';
import CardList from './components/CardList';
import Counter from './components/counter/Counter';

function App() {
  console.log('<App />');
  return (
    <div className='app'>
      <h1>Hello Vite</h1>
      <Counter />
      {false && <CardList />}
    </div>
  );
}
export default App;
