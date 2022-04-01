import React from "react";


const CLIENT_ID = "7dc2b92899cb4c0e86e958458b7676f6"
const RESPOND_TYPE = "token"
const REDIRECT_URI_AFTER_LOGIN = "http://192.168.1.7:3000"
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize/"
const SPACE_DELIMITER = "%20";
const SCOPES = ["playlist-modify-private"];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);
const STATE = 123
const ACCES_TOKEN = "BQCgewDJJKxss6IybMI79aySNnFpNkvNDem5Qzid2EG-QwBJ_Q_o0VgefLpiIgGvjPhFSYNkAjPFcdpOBvT73A5ED1DRY9TXjKExsFYn9zUvGdt0wJPwwO_fZWtr6Gt_WusJWSIimU3crXVmLWxYDRxL_L5hhURtTBJSnF4tikAku_VQef747g"

// http://192.168.1.7:3000/#access_token=BQCgewDJJKxss6IybMI79aySNnFpNkvNDem5Qzid2EG-QwBJ_Q_o0VgefLpiIgGvjPhFSYNkAjPFcdpOBvT73A5ED1DRY9TXjKExsFYn9zUvGdt0wJPwwO_fZWtr6Gt_WusJWSIimU3crXVmLWxYDRxL_L5hhURtTBJSnF4tikAku_VQef747g&token_type=Bearer&expires_in=3600&state=123


const handleLogin =() => {
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?response_type=token&client_id=${CLIENT_ID}&scope=${SCOPES_URL_PARAM}&redirect_uri=${REDIRECT_URI_AFTER_LOGIN}&show_dialog=true&state=${STATE}`
}
    

export default handleLogin