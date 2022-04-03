import './App.css';
import './albumData';
import MyExtract from './components/components'
import MyExtractingAfter from './components/components';
import ObjectAlbum from './components/dataAlbum';
import './components/WebApp'
import WebApp from './components/WebApp';
import handleLogin from './components/WebApp';
import spotifySearch from './components/searchspotify';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>CREATE PLAYLIST</h1>
        <form>
        <p>Title</p>
          <input id="inputTitle" placeholder="Insert playlist title" />
          <p>Description</p>
          <textarea
            id="inputDescription"
            placeholder="Insert playlist description"
          ></textarea>
          <p></p>
          <button onClick={handleLogin} id="submit" type="submit">Create</button>
        </form>
        <button onClick={handleLogin}>Link to Spotify</button>
        
    <br></br>
    <div class="buttonIn">
        <input type="text" id="enter"></input>
        <button id="clear">Search</button>
    </div>
      </div>
      <div className="container">
        
        <div className="albumLists">
          <div className="album">
            <img src="https://c.tenor.com/JniFp1Q_5ToAAAAC/soodam-secret-number.gif"></img>
            <p>Title: Who Dis'</p>
            <p>Artist: 시크릿넘버</p>
            {/* <spotifySearch /> */}
          </div>
          <ObjectAlbum />
          {/* <MyExtractingAfter
            artistName="Queen"
            nameHref="https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"
            albumPictSrc="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b"
            albumTitle="Bohemian Rhapsody"
            albumHref="https://open.spotify.com/track/3z8h0TU7ReDPLIbEnYhWZb"
            playlistHref="https://open.spotify.com/album/6i6folBtxKV28WX3msQ4FE"/> */}
          
        </div>
        
      </div>
    </div>
  
  
    

  );
}



export default App;
