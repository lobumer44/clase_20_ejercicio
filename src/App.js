
import './App.css';
import Footer from './componentes/footer/footer';
import Home from './componentes/home.js/home';
import Intro from './componentes/intro/intro';

function App() {
  return (
    <div className="App">

    <Home>
      <Intro titulo= " Rick & Morty" />
      
      </Home> 
    
    

      
<Footer></Footer>
    </div>
  );
}

export default App;
