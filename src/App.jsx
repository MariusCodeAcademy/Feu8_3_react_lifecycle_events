import './styles/index.css';
import './styles/App.css';
import CardList from './components/CardList';
import CounterList from './components/counter/CounterList';

const cardsData = [
  { id: 1, title: 'HTML', body: 'Is the sturture of web' },
  { id: 2, title: 'CSS', body: 'Is the style of web' },
  { id: 3, title: 'JS', body: 'Is the interactivity' },
];

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
