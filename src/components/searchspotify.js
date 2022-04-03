
import axios from 'axios'


const SONGLIST_ENDPOINT = "https://api.spotify.com/v1/search?q=name:Akmu&type=artist,track?"

const spotifySearch = () => {
    const [token, setToken] = useState("");
    const [data2, setData] = useState({});

    useEffect (() => {
        if (localStorage.getItem("accessToken")) {
            setToken(localStorage.getItem("acessToken"));
        }
    }, []);

    const handleSonglist = () => {
        axios
        .get(SONGLIST_ENDPOINT, {
            headers: {
                Authorization: "Bearer" + token,
            },
        })
        .then((Response) =>{
            setData(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <button onClick={handleSonglist}>Search</button>
    );
}

export default spotifySearch