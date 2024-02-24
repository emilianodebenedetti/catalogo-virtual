import './App.css';
import Carousel from './components/Carousel/Carousel';
import Navbar from './components/Navbar/Navbar';
import Slogan from './components/Slogan/Slogan';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Carousel />
        <Slogan />
      </header>
    </div>
  );
}

export default App;
