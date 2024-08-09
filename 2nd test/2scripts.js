const clientId = '88a4a2b546c64d72af46789cd47c436f';
const redirectUri = './2index.html';
const scopes = 'user-library-read user-read-private';

const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;

window.location.href = authUrl;


async function getAccessToken(code) {
  const clientId = 'YOUR_CLIENT_ID';
  const clientSecret = 'YOUR_CLIENT_SECRET';
  const redirectUri = 'YOUR_REDIRECT_URI';

  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri
    })
  });

  const tokenData = await tokenResponse.json();
  return tokenData.access_token;
}

// Example usage
const code = new URLSearchParams(window.location.search).get('code');
if (code) {
  getAccessToken(code).then(token => {
    console.log('Access Token:', token);
    // You can now use this token to make API requests
  });
}

async function fetchUserProfile(token) {
  const response = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });

  const userData = await response.json();
  console.log('User Profile:', userData);
}

// Use the access token obtained earlier
const token = 'YOUR_ACCESS_TOKEN';
fetchUserProfile(token);







// const repoList = document.querySelector('ul');
// const fetchButton = document.getElementById('fetch-button');

// function getApi() {
//   const requestUrl = 'https://api.spotify.com/v1/users/smedjan/playlists';

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (let i = 0; i < data.length; i++) {
//         const listItem = document.createElement('li');
//         listItem.textContent = data[i].html_url;
//         repoList.appendChild(listItem);
//       }
//     });
// }

// fetchButton.addEventListener('click', getApi);






// // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
// const token = 'BQDZdQiz-TuOScrup6PIcEBgeWfFlwDD111zrqf8NNGSzl25B-H7E1jbfHZkMDzd9Qhamv74Tf8uLU79Qd5lThjaQ4omG5EN2L2aZ9WnvuyIfEcO07kgrphEaa0-7y86Y4Zuszm6GnbysyM5-o1Ww65GhAn88N_zRfcRuhhJuF4RTbcd1HdQhYPQvGA5PQBEcBN860X_7qfNaLOoKdykaccD2bKJxLiWML37DlGES6ymlubkUqpBlXZSijzeXIkYIfziz2T34T9e4FedujYPKmEGGQ';
// async function fetchWebApi(endpoint, method, body) {
//   const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method,
//     body: JSON.stringify(body)
//   });
//   return await res.json();
// }

// async function getTopTracks() {
//   // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
//   return (await fetchWebApi(
//     'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
//   )).items;
// }

// const topTracks = await getTopTracks();
// console.log(
//   topTracks?.map(
//     ({ name, artists }) =>
//       `${name} by ${artists.map(artist => artist.name).join(', ')}`
//   )
// );

// var client_id = 'CLIENT_ID';
// var redirect_uri = 'http://localhost:8888/callback';

// var app = express();

// app.get('/login', function (req, res) {

//   var state = generateRandomString(16);
//   var scope = 'user-read-private user-read-email';

//   res.redirect('https://accounts.spotify.com/authorize?' +
//     querystring.stringify({
//       response_type: 'code',
//       client_id: client_id,
//       scope: scope,
//       redirect_uri: redirect_uri,
//       state: state
//     }));
// });


// curl - X POST "https://accounts.spotify.com/api/token" \
// -H "Content-Type: application/x-www-form-urlencoded" \
// -d "grant_type=client_credentials&client_id=88a4a2b546c64d72af46789cd47c436f&client_secret=71c8bcd8b4e94b1eaea0dab25e41a9bd"


// curl--request GET \
// 'https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V' \
// --header "Authorization: Bearer 88a4a2b546c64d72af46789cd47c436f"



