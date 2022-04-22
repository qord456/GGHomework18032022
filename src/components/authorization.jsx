import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";


const endpoint = "https://accounts.spotify.com/authorize";
const client_id = "7dc2b92899cb4c0e86e958458b7676f6"
const scope = "playlist-modify-private"
const redirect_uri = "http://localhost:3000"

const linkLogin = `${endpoint}?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scope}`

function getToken (tokenName) {
    let tokens = new URLSearchParams(window.location.search);
    return console.log(tokens.get(tokenName));
}

    console.log(getToken);



function Authorization () {
    return (
        <div>
            <a href={linkLogin}>Authorize</a>
        </div>
    )
}

export default Authorization