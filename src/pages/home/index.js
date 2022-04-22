import { DataMapping } from "../../components/data1Comp"

function Home () {
    return (
        <div className="container">
            <h1>Create Playlist</h1>
            <div className="albumWrap">
                <div className="albumList">
                    <img alt="ImageFromInternet" src="https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2021/10/27/3721678558.jpeg"></img>
                    <p>Title: Fire Saturday</p>
                    <p>Song Artist: Secret Number</p>
                    <button>Select</button>
                </div>
                <DataMapping />
            </div>
            
        </div>
        
    )
}

export default Home