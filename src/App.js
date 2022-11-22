import './App.css';
import Home from "./components/Home"
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div>
      <MyNav/>
      <Home style={ { height: "100% "}}/>
      <MyFooter className="fixed-bottom"/>
    </div>

  );
}

export default App;
