import './App.css';
import Home from "./components/Home"
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div>
      <MyNav/>
      <Home />
      <MyFooter className="fixed-bottom"/>
    </div>

  );
}

export default App;
