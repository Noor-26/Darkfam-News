import logo from './logo.svg';
import './App.css';
import Navber from './components/shared/Navber/Navber';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App" data-theme="light">
      <Navber/>
      <Home/>
    </div>
  );
}

export default App;
