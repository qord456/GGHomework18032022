import './App.css';
import './albumData';
import MyExtract from './components/components'
import MyExtractingAfter from './components/components';

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
        
      </div>
      <div className="container">
        <div className="albumLists">
          <div className="album">
            <img src="https://c.tenor.com/JniFp1Q_5ToAAAAC/soodam-secret-number.gif"></img>
            <p>Title: Who Dis'</p>
            <p>Artist: 시크릿넘버</p>
            <button id='tombol'>Select</button>
          </div>
          <MyExtractingAfter
            artistName="Queen"
            nameHref="https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"
            albumPictSrc="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b"
            albumTitle="Bohemian Rhapsody"
            albumHref="https://open.spotify.com/track/3z8h0TU7ReDPLIbEnYhWZb"
            playlistHref="https://open.spotify.com/album/6i6folBtxKV28WX3msQ4FE"/>
        </div>
      </div>
    </div>
    

  );
}



export default App;
