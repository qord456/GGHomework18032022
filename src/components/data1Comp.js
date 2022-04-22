import data from "../contents/data1"

const Data1Comp = ({title, url, artist, upload}) => (
    <div className="albumList">
    <img src={url} alt="imgAlbum"></img>
    <table>
        <tr>
            <th>Artist</th>
            <td>: {artist}</td>
        </tr>
        <tr>
            <th>Title</th>
            <td>: {title}</td>
        </tr>
        <tr>
            <th>Upload Date</th>
            <td>: {upload}</td>
        </tr>
    </table>
    <button>Select</button>
    </div>
)

const DataMapping = () => {
    return data.map((e => 
        <Data1Comp 
        key={e.id}
        title={e.name}
        url={e.album.images[0].url}
        artist={e.artists[0].name}
        upload={e.album.release_date}

        />))
}

export {Data1Comp, DataMapping}



