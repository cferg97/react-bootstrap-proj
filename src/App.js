import './App.css';
import Home from "./components/Home"
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div>
      <MyNav/>
      <Home/>
      <footer>
      <MyFooter/>
      </footer>
    </div>

  );
}

export default App;
