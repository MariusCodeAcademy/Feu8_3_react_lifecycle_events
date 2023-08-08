import './styles/index.css';
import './styles/App.css';
import CardList from './components/CardList';

function App() {
  console.log('<App />');
  return (
    <div className='app'>
      <h1>Hello Vite</h1>
      <CardList />
    </div>
  );
}
export default App;
