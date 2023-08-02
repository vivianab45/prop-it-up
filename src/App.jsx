import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
     <PersonCard firstName="Minnie" lastName="Mouse" age={40} hairColor="Pink"/>
     <PersonCard firstName="Mickey" lastName="Mouse" age={41} hairColor="Black"/>
     <PersonCard firstName="Donald" lastName="Duck" age={50} hairColor="Blue"/>
     <PersonCard firstName="Daisy" lastName="Duck" age={49} hairColor="Yellow"/>

    </div>
  );
}

export default App;
