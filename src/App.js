import logo from './logo.svg';
import './App.css';
import './albumData';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>CREATE PLAYLIST</h1>
        <div className="form">
        <p>Title</p>
          <input id="inputTitle" placeholder="Insert playlist title" />
          <p>Description</p>
          <textarea
            id="inputDescription"
            placeholder="Insert playlist description"
          ></textarea>
          <p></p>
          <button id="submit" type="submit">Create</button>
        </div>
        <div>
          <div className="album">
          <img src="https://c.tenor.com/JniFp1Q_5ToAAAAC/soodam-secret-number.gif"></img>
          <p>Title: Who Dis'</p>
          <p>Artist: 시크릿넘버</p>
          <button id='tombol'>Select</button>
        </div>
        </div>
        
      </div>
    </div>
  );
}



export default App;
