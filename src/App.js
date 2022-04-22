import './App.css';
import Search from './components/search';
import Home from './pages/home';


function App() {
  var url = window.location;
  console.log (url)
  
  
  return (
    <>
    <Search />
    <Home />
    </>
  );
}

export default App;
