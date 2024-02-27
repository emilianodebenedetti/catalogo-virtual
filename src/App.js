import './App.css';
import AddProduct from './components/Card/AddProduct';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import Slogan from './components/Slogan/Slogan';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Carousel />
      </header>
      <Slogan />
      <Menu />
      <Footer/>
      {/* <AddProduct/> */}
    </div>
  );
}

export default App;
