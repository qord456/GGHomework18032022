import data2 from "./item/albumData"
import { useSearchResult } from "../context/useSearchResult";


const DataMapping = ({imgSrc, albumName, artistName, date,trackTotal}) => (
    <div className="container album">
        <h4>{albumName}</h4>
      <img className="imagesAlbum" src={imgSrc} alt="img"></img>
      <table>
            <tr>
              <th>Album:</th>
              <td>{albumName}</td>
            </tr>
            <tr>
              <th>Artist:</th>
              <td>{artistName}</td>
            </tr>
            <tr>
              <th>Release:</th>
              <td>{date}</td>
            </tr>
            <tr>
              <th>Total Track:</th>
              <td>{trackTotal}</td>
            </tr>    
      </table>
      <button className="albumButton">Select</button>
      <button></button>
      <br/>
    </div>
  );
  
  const ObjectAlbum = () => {
    return data2.map((e)=> (
      <DataMapping
              key={e.id}
              imgSrc={e.album.images[0].url}
              albumName={e.album.name}
              artistName={e.artists[0].name}
              date={e.album.release_date}
              trackTotal={e.track_number}
  
            />
        ))
  } 
    export default ObjectAlbum;